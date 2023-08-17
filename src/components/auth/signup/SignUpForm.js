import { useEffect } from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { RecaptchaVerifier } from 'firebase/auth';

import echoLogo from '@assets/util/echoLogo.png';
import {
  regExpID,
  regExpPassword,
  regExpName,
  regExpNickname,
  regExpPhone,
} from '@constants/regular-expression';
import useCheckID from '@hooks/useCheckID';
import useCheckPhone, { auth } from '@hooks/useCheckPhone';
import usePreventLeave from '@hooks/usePreventLeave';
import StyledSection from '@styles/auth/signup/SignUpForm-styled';

const SignUpForm = ({ error, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    setFocus,
    getValues,
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

  // 아이디 중복체크 훅
  const {
    enteredID,
    isUniqueID,
    onChangeID,
    checkDuplicate,
    message: checkIDMessage,
  } = useCheckID();

  const { timer, isSend, sendCount, isVerify, onSendCode, onVerifyCode } =
    useCheckPhone();

  const submit = useSubmit();

  // 페이지를 벗어날 시 Prompt 창 띄우기
  usePreventLeave(isDirty);

  // 닉네임 중복 에러
  useEffect(() => {
    if (!error) return;

    setError('nickname', { message: error.message }, { shouldFocus: true });
  }, [setError, error]);

  // 캡챠 인증
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: () => {},
      },
    );
  }, []);

  const onSubmit = (authForm) => {
    if (!isUniqueID) {
      alert('아이디 중복 확인을 해주세요.');
      setFocus('id');
      return;
    }

    if (!isVerify) {
      alert('휴대폰 인증을 해주세요.');
      setFocus('phone');
      return;
    }

    submit(authForm, { method: 'post' });
  };

  return (
    <StyledSection>
      <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
        <Link to='/'>
          <div className='logo'>
            <img src={echoLogo} alt='echo logo' />
          </div>
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
                value: enteredID,
                onChange: onChangeID,
              })}
            />
            <button type='button' onClick={checkDuplicate}>
              중복 확인
            </button>
          </div>
          <p className={`input-validation ${isUniqueID && 'success'}`}>
            {!checkIDMessage && <ErrorMessage errors={errors} name='id' />}
            {checkIDMessage && <span>{checkIDMessage}</span>}
          </p>
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
                if (getValues('password') !== val) {
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
                value: regExpName,
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
              className={`${isSend && 'disabled'}`}
              placeholder='※ 휴대폰 번호를 입력해주세요.'
              {...register('phone', {
                required: '※ 필수 항목 입니다.',
                pattern: {
                  value: regExpPhone,
                  message: '※ 휴대폰 번호를 정확하게 입력해주세요.',
                },
              })}
              disabled={isSend}
            />
            <button
              type='button'
              onClick={() => onSendCode(getValues('phone'))}
              className={isVerify ? 'disabled' : undefined}
              disabled={
                errors.phone || getValues('phone').length === 0 || isVerify
              }
            >
              {!isSend ? '전송' : '재전송'}
              {!isVerify && isSend && `(${sendCount}/3)`}
            </button>
          </div>
          <span className='input-validation'>
            <ErrorMessage errors={errors} name='phone' />
          </span>
        </div>
        {isSend && (
          <div className='input-container'>
            <div className='certification-box'>
              <input
                id='inputCertificationNumber'
                type='text'
                className={isVerify ? 'disabled' : undefined}
                placeholder='인증번호를 입력해주세요'
                {...register('certificationNumber', {
                  required: true,
                })}
                disabled={isVerify}
              />
              {!isVerify && <span>{timer}</span>}
              <button
                className={`identify-button ${isVerify && 'disabled'}`}
                type='button'
                onClick={() => onVerifyCode(getValues('certificationNumber'))}
                disabled={isVerify}
              >
                확인
              </button>
            </div>
          </div>
        )}
        <div className='button-container'>
          <input
            className='submit-button'
            type='submit'
            value={isSubmitting ? '가입중...' : '가입하기'}
            disabled={isSubmitting}
          />
          <input className='reset-button' type='reset' value='취소하기' />
        </div>
        <p className='navigation'>
          <Link to='/auth/signin' className='navigation-account'>
            계정이 이미 있으신가요?
          </Link>
        </p>
      </form>
      <div id='recaptcha-container'></div>
    </StyledSection>
  );
};

export default SignUpForm;
