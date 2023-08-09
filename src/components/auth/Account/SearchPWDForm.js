import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTimer } from 'use-timer';

const SearchPWDForm = () => {
  const [isSendCertificationNumber, setIsSendCertificationNumber] =
    useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm();

  const {
    time,
    start,
    reset: resetTime,
  } = useTimer({
    initialTime: 180,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    navigate('?mode=findPWD');
  };

  const onSendCertificationNumber = () => {
    const data = getValues('phone'); // "test-input"

    if (data.length <= 4) {
      alert('정확한 휴대폰 번호를 입력해주세요.');
      return;
    }

    alert('인증번호를 전송하였습니다.');
    setIsSendCertificationNumber(true);
    start();
  };

  const restartTime = () => {
    resetTime();
    start();
  };

  return (
    <>
      <p className='description'>아이디/비밀번호 찾기</p>

      <div className='account-mode'>
        <NavLink to='/auth/account/id'>아이디 찾기</NavLink>
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
            placeholder='아이디를 입력해주세요.'
            {...register('id', {
              required: true,
              minLength: {
                value: 1,
                message: '아이디를 입력해주세요.',
              },
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
              className={`${isSendCertificationNumber && 'disabled'}`}
              placeholder='※ 휴대폰 번호를 입력해주세요.'
              {...register('phone', {
                required: true,
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
        </div>
        {isSendCertificationNumber && (
          <div className='input-container'>
            <div className='certification-box'>
              <input
                id='inputCertificationNumber'
                type='text'
                placeholder='인증번호를 입력해주세요'
                {...register('certificationNumber', {
                  required: true,
                })}
              />
              <span>
                {Math.floor(time / 60)
                  .toString()
                  .padStart(2, '0')}
                :{(time % 60).toString().padStart(2, '0')}
              </span>
              <button className='identify-button' type='button'>
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
