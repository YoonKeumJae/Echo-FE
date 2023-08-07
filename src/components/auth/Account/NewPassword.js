import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import { regExpPassword } from '@constants/regular-expression';
import usePreventLeave from '@hooks/usePreventLeave';
import StyledNewPassword from '@styles/auth/account/NewPassword-styled';

const NewPassword = () => {
  const [enablePrevent, disablePrevent] = usePreventLeave();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    watch,
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();

  // eslint-disable-next-line no-console
  console.log(errors);

  useEffect(() => {
    if (isDirty) enablePrevent();
    else disablePrevent();
  }, [enablePrevent, disablePrevent, isDirty]);

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    navigate('/auth/signin');
  };

  return (
    <StyledNewPassword>
      <div className='find-id'>
        <p>아이디</p>
        <p className='find'>jay0214</p>
      </div>
      <form className='newPassword-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <label htmlFor='newPassword'>새 비밀번호</label>
          <input
            id='newPassword'
            type='password'
            placeholder='비밀번호 입력 (문자, 숫자, 특수문자 포함 8~16자)'
            {...register('newPassword', {
              required: '※ 필수 항목 입니다.',
              pattern: {
                value: regExpPassword,
                message:
                  '※ 문자, 숫자, 특수문자를 포함한 16자 이내의 비밀번호를 입력해주세요.',
              },
            })}
          />
          <div className='input-validation'>
            <ErrorMessage errors={errors} name='newPassword' />
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='confirmNewPassword' />
          <input
            id='confirmNewPassword'
            type='password'
            placeholder='비밀번호 재입력'
            {...register('confirmNewPassword', {
              required: '※ 필수 항목 입니다.',
              validate: (val) => {
                if (watch('newPassword') !== val) {
                  return '※ 비밀번호가 일치하지 않습니다.';
                }

                return null;
              },
            })}
          />
          <div className='input-validation'>
            <ErrorMessage errors={errors} name='confirmNewPassword' />
          </div>
        </div>

        <div className='button-container'>
          <button
            type='submit'
            className='login-button'
            disabled={isSubmitting}
          >
            확인
          </button>
        </div>
      </form>
    </StyledNewPassword>
  );
};

export default NewPassword;
