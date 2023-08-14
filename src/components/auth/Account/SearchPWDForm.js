import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useSubmit } from 'react-router-dom';

import { regExpPhone } from '@constants/regular-expression';
import useCheckPhone from '@hooks/useCheckPhone';
import { ErrorMessage } from '@hookform/error-message';

const SearchPWDForm = ({ error, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      id: '',
      phone: '',
    },
  });

  const {
    timer,
    isSend,
    sendCount,
    isVerify,
    onSendCode,
    onVerifyCode,
    resetVerify,
  } = useCheckPhone();
  const submit = useSubmit();

  useEffect(() => {
    if (error) {
      alert(error.message);
      reset();
      resetVerify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const onSubmit = (data) => submit(data, { method: 'POST' });

  return (
    <>
      <p className='description'>아이디/비밀번호 찾기</p>

      <div className='account-mode'>
        <Link to='/auth/account/id'>아이디 찾기</Link>
        <p className='selected'>비밀번호 찾기</p>
      </div>
      <form className='account-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <label htmlFor='inputID' className='input-type'>
            아이디
          </label>
          <input
            id='inputID'
            type='text'
            name='id'
            placeholder='아이디를 입력해주세요.'
            {...register('id', {
              required: true,
            })}
          />
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
              placeholder='휴대폰 번호를 입력해주세요.'
              {...register('phone', {
                required: '휴대폰 번호를 입력해주세요.',
                pattern: {
                  value: regExpPhone,
                  message: '휴대폰 번호를 정확하게 입력해주세요.',
                },
              })}
              disabled={isSend}
            />
            <button
              type='button'
              onClick={onSendCode}
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
                onClick={onVerifyCode}
                disabled={isVerify}
              >
                확인
              </button>
            </div>
          </div>
        )}
        <button className='submit-button' type='submit' disabled={isSubmitting}>
          확인
        </button>
      </form>

      <p className='navigation'>
        <Link to='/auth/signup' className='navigation-signup'>
          계정이 없으신가요?
        </Link>
      </p>
    </>
  );
};

export default SearchPWDForm;
