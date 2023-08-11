import { useForm } from 'react-hook-form';
import { useSubmit } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import { regExpPassword } from '@constants/regular-expression';
import usePreventLeave from '@hooks/usePreventLeave';
import StyledForm from '@styles/auth/account/NewPassword-styled';

const NewPassword = ({ userID, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm({ mode: 'onBlur' });
  const submit = useSubmit();

  usePreventLeave(isDirty);

  const onSubmit = (data) => submit(data, { method: 'PUT' });

  return (
    <>
      <p className='description'>새로운 비밀번호를 설정해주세요.</p>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <input type='hidden' value={userID} {...register('id')} />
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
      </StyledForm>
    </>
  );
};

export default NewPassword;
