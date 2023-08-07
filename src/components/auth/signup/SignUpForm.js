import { useEffect, useState } from 'react';
import { Link, useActionData, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useTimer } from 'use-timer';

import {
  regExpID,
  regExpPassword,
  regExpNickname,
  regExpPhone,
} from '@constants/regular-expression';
import usePreventLeave from '@hooks/usePreventLeave';
import StyledSection from '@styles/auth/signup/SignUpForm-styled';

const SignUpForm = () => {
  const [enablePrevent, disablePrevent] = usePreventLeave();
  const [isCheckID, setIsCheckID] = useState(false);
  const [isSendCertificationNumber, setIsSendCertificationNumber] =
    useState(false);
  const [isVerifyNumber, setIsVerifyNumber] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    watch,
    setError,
    setFocus,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      id: '',
      password: '',
      confirmPassword: '',
      name: '',
      nickname: '',
      phone: '',
      certificationNumber: '',
    },
  });
  const {
    time,
    start,
    pause,
    reset: resetTime,
    status,
  } = useTimer({
    initialTime: 180,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });
  const submit = useSubmit();
  const data = useActionData();

  useEffect(() => {
    if (!data) return;

    setError(
      'nickname',
      { message: '이미 존재하는 닉네임입니다.' },
      { shouldFocus: true },
    );
  }, [setError, data]);

  useEffect(() => {
    if (isDirty) enablePrevent();
    else disablePrevent();
  }, [enablePrevent, disablePrevent, isDirty]);

  const onCheckID = () => {
    // 중복체크 로직

    setIsCheckID(true); // 중복체크 성공시
  };

  const onSendCertificationNumber = () => {
    if (errors.phone) {
      setError('phone', { message: '※ 휴대폰 번호를 정확하게 입력해주세요.' });
      return;
    }

    alert('인증번호를 전송하였습니다.');
    setIsSendCertificationNumber(true);
    start();
  };

  const onVerityNumber = () => {
    if (status === 'STOPPED') {
      alert('인증번호 입력 시간이 만료되었습니다.');
      setFocus('certificationNumber');
      return;
    }

    // 휴대폰 인증 로직

    // 휴대폰 인증 완료시
    pause();
    setIsVerifyNumber(true);
  };

  const restartTime = () => {
    resetTime();
    start();
  };

  const onSubmit = (authForm) => {
    if (!isCheckID) {
      alert('아이디 중복 확인을 해주세요.');
      setFocus('id');
      return;
    }

    if (!isVerifyNumber) {
      alert('휴대폰 인증을 해주세요.');
      setFocus('phone');
      return;
    }

    pause();
    submit(authForm, { method: 'post' });
    start();
  };

  return (
    <StyledSection>
      <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
        <Link to='/'>
          <h2 className='logo'>Logo</h2>
        </Link>
        <p className='description'>Echo 회원가입</p>
        <div className='input-container'>
          <label htmlFor='inputId' className='input-type'>
            아이디
          </label>
          <div className='certification-box'>
            <input
              id='inputId'
              type='text'
              placeholder='아이디 입력(6~20자)'
              {...register('id', {
                required: '※ 필수 항목 입니다.',
                pattern: {
                  value: regExpID,
                  message: '※ 6~20자 내외의 아이디를 입력해주세요.',
                },
              })}
            />
            <button type='button' onClick={onCheckID}>
              중복 확인
            </button>
          </div>
          <span className={`input-validation ${isCheckID && 'success'}`}>
            <ErrorMessage errors={errors} name='id' />
            {isCheckID && '사용하실 수 있는 아이디입니다.'}
          </span>
        </div>
        <div className='input-container'>
          <label htmlFor='inputPassword' className='input-type'>
            비밀번호
          </label>
          <input
            id='inputPassword'
            type='password'
            placeholder='비밀번호 입력 (문자, 숫자, 특수문자 포함 8~16자)'
            {...register('password', {
              required: '※ 필수 항목 입니다.',
              pattern: {
                value: regExpPassword,
                message:
                  '※ 문자, 숫자, 특수문자를 포함한 16자 이내의 비밀번호를 입력해주세요.',
              },
            })}
          />
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='password' />
          </span>
        </div>
        <div className='input-container'>
          <label htmlFor='inputConfirmPassword' className='input-type'>
            비밀번호 확인
          </label>
          <input
            id='inputConfirmPassword'
            type='password'
            placeholder='비밀번호 재입력'
            {...register('confirmPassword', {
              required: '※ 필수 항목 입니다.',
              validate: (val) => {
                if (watch('password') !== val) {
                  return '※ 비밀번호가 일치하지 않습니다.';
                }

                return null;
              },
            })}
          />
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='confirmPassword' />
          </span>
        </div>
        <div className='input-container'>
          <label htmlFor='inputName' className='input-type'>
            이름
          </label>
          <input
            id='inputName'
            type='text'
            placeholder='이름을 입력해주세요.'
            {...register('name', {
              required: '※ 필수 항목 입니다.',
              pattern: {
                value: /^[가-힣]+$/,
                message: '※ 1글자 이상의 한글 이름을 입력해주세요.',
              },
            })}
          />
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='name' />
          </span>
        </div>
        <div className='input-container'>
          <label htmlFor='inputNickname' className='input-type'>
            닉네임
          </label>
          <input
            id='inputNickname'
            type='text'
            placeholder='닉네임을 입력해주세요.'
            {...register('nickname', {
              required: '※ 필수 항목 입니다.',
              pattern: {
                value: regExpNickname,
                message: '※ 2~8자 이내의 닉네임을 입력해주세요.',
              },
            })}
          />
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='nickname' />
          </span>
        </div>
        <div className='input-container'>
          <label htmlFor='inputPhone' className='input-type'>
            휴대폰
          </label>
          <div className='certification-box'>
            <input
              id='inputPhone'
              type='text'
              className={`${isSendCertificationNumber && 'disabled'}`}
              placeholder='※ 휴대폰 번호를 입력해주세요.'
              {...register('phone', {
                required: true,
                pattern: {
                  value: regExpPhone,
                  message: '※ 휴대폰 번호를 정확하게 입력해주세요.',
                },
              })}
              disabled={isSendCertificationNumber}
            />
            {!isSendCertificationNumber && (
              <button
                type='button'
                onClick={onSendCertificationNumber}
                disabled={isSendCertificationNumber}
              >
                전송
              </button>
            )}
            {isSendCertificationNumber && (
              <button type='button' onClick={restartTime}>
                재전송
              </button>
            )}
          </div>
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='phone' />
          </span>
        </div>
        {isSendCertificationNumber && (
          <div className='input-container'>
            <div className='certification-box'>
              <input
                id='inputCertificationNumber'
                type='text'
                className={isVerifyNumber ? 'disabled' : undefined}
                placeholder='인증번호를 입력해주세요'
                {...register('certificationNumber', {
                  required: true,
                })}
                disabled={isVerifyNumber}
              />
              <span>
                {Math.floor(time / 60)
                  .toString()
                  .padStart(2, '0')}
                :{(time % 60).toString().padStart(2, '0')}
              </span>
              <button
                className={`identify-button ${isVerifyNumber && 'disabled'}`}
                type='button'
                onClick={onVerityNumber}
                disabled={isVerifyNumber}
              >
                확인
              </button>
            </div>
          </div>
        )}
        <div className='button-container'>
          <input
            className={`submit-button ${isSubmitting && 'disabled'}`}
            type='submit'
            value={isSubmitting ? '가입중...' : '가입하기'}
            disabled={isSubmitting}
          />
          <input className='reset-button' type='reset' value='취소하기' />
        </div>
        <div className='signin-error'>
          <ErrorMessage errors={errors} name='response' />
        </div>
        <p className='navigation'>
          <Link to='/auth/signin' className='navigation-account'>
            계정이 이미 있으신가요?
          </Link>
        </p>
      </form>
    </StyledSection>
  );
};

export default SignUpForm;
