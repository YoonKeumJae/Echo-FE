import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useTimer } from 'use-timer';

import {
  regExpID,
  regExpPassword,
  regExpNickname,
  regExpPhone,
} from '@constants/regular-expression';
import { signupAPI } from '@services/auth';
import StyledSignup from '@styles/auth/Signup-styled';

const Signup = () => {
  const [isSendCertificationNumber, setIsSendCertificationNumber] =
    useState(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset: resetStatus,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    if (status === 'STOPPED') {
      alert('인증번호 입력 시간이 만료되었습니다.');
      return;
    }

    pause();
    const response = await signupAPI(data);

    // 로그인 성공
    if (response.status === 200) {
      // eslint-disable-next-line no-console
      console.log('회원가입 성공!'); // redirect 조정 필요
      return;
    }

    // ID가 존재하지 않는 경우
    if (!response.ok) {
      resetStatus((formValues) => ({ ...formValues }));
      setError(
        'response',
        {
          type: 'response',
          message: '서버와의 연결이 원활하지 않습니다.',
        },
        { shouldFocus: true },
      );
    }

    // start();
  };

  const onSendCertificationNumber = () => {
    if (!errors.phone) {
      alert('인증번호를 전송하였습니다.');
      setIsSendCertificationNumber(true);
      start();
    }
  };

  const restartTime = () => {
    resetTime();
    start();
  };

  return (
    <StyledSignup>
      <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='logo'>Logo</h2>
        <p className='description'>서비스에 회원가입하기</p>
        <div className='input-container'>
          <label htmlFor='inputId' className='input-type'>
            아이디
          </label>
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
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='id' />
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
          <div className='phone-box'>
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
            <button
              type='button'
              className={`${isSendCertificationNumber && 'disabled'}`}
              onClick={onSendCertificationNumber}
              disabled={isSendCertificationNumber}
            >
              인증하기
            </button>
          </div>
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='phone' />
          </span>
        </div>
        <div className='input-container'>
          <div className='certification-box'>
            <input
              id='inputCertificationNumber'
              type='text'
              placeholder='인증번호를 입력해주세요'
              {...register('certificationNumber', {
                required: true,
              })}
              disabled={!isSendCertificationNumber}
            />
            {isSendCertificationNumber && (
              <span>
                {Math.floor(time / 60)
                  .toString()
                  .padStart(2, '0')}
                :{(time % 60).toString().padStart(2, '0')}
              </span>
            )}
            {isSendCertificationNumber && (
              <button
                className='resend-button'
                type='button'
                onClick={restartTime}
              >
                재전송
              </button>
            )}
          </div>
        </div>
        <div className='button-container'>
          <input
            className={`submit-button ${!isValid && 'disabled'}`}
            type='submit'
            value={isSubmitting ? '가입중...' : '가입하기'}
            disabled={isSubmitting}
          />
          <input className='reset-button' type='reset' value='취소하기' />
        </div>
        <div className='signin-error'>
          <ErrorMessage errors={errors} name='response' />
        </div>
      </form>
    </StyledSignup>
  );
};

export default Signup;
