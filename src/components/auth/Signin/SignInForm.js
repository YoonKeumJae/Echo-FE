import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSubmit } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import echoLogo from '@assets/util/echoLogo.png';
import StyledSection from '@styles/auth/signin/SignInForm-styled';
import SignInNavigation from './SignInNavigation';

const SignInForm = ({ error, isSubmitting }) => {
  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm();
  const submit = useSubmit();

  useEffect(() => {
    if (!error) return;

    // 에러가 있는 경우
    if (error.code === 401) {
      setFocus('id');
      reset({ id: '', password: '' });
      setError('id', { message: error.message });
    }
    if (error.code === 422) {
      setFocus('password');
      reset((formValues) => ({ ...formValues, password: '' }), {});
      setError('password', { message: error.message });
    }
  }, [clearErrors, reset, setFocus, setError, error]);

  const onSubmit = (authForm) => submit(authForm, { method: 'post' });

  return (
    <StyledSection>
      <div className='signin-section'>
        <form
          method='post'
          className='signin-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='logo'>
            <img src={echoLogo} alt='echo logo' />
          </div>
          <p className='description'>Echo 로그인</p>
          <div className='input-container'>
            <label htmlFor='inputId' className='input-type'>
              아이디
            </label>
            <input
              id='inputId'
              type='text'
              placeholder='아이디 입력'
              {...register('id', {
                required: '아이디를 입력해주세요.',
              })}
            />
          </div>
          <div className='input-container'>
            <label htmlFor='inputPassword' className='input-type'>
              비밀번호
            </label>
            <input
              id='inputPassword'
              type='password'
              placeholder='비밀번호 입력'
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
          </div>
          <button
            className='submit-button'
            type='submit'
            disabled={isSubmitting}
          >
            로그인
          </button>
          <div className='error-container'>
            <p>
              <ErrorMessage errors={errors} name={Object.keys(errors)[0]} />
            </p>
          </div>
        </form>

        <SignInNavigation />
      </div>
    </StyledSection>
  );
};

export default SignInForm;
