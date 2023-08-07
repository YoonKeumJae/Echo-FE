import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTimer } from 'use-timer';

const SearchPWD = ({ onSuccess }) => {
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

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    onSuccess();
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
        <label htmlFor='inputName' className='input-type'>
          사용자 이름
        </label>
        <input
          id='inputName'
          type='text'
          placeholder='이름을 입력해주세요.'
          {...register('name', { required: true })}
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
  );
};

export default SearchPWD;
