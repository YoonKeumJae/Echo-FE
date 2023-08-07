import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useActionData, useNavigation, useSubmit } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import StyledSection from '@styles/auth/signin/SignInForm-styled';
import SignInNavigation from './SignInNavigation';

const SignInForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors },
    clearErrors,
  } = useForm();
  const data = useActionData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (!data) return;

    const { errorCode } = data;

    clearErrors();
    if (errorCode === 401) {
      setFocus('id');
      reset(() => ({ id: '', password: '' }));
    }
    if (errorCode === 422) {
      setFocus('password');
      reset((formValues) => ({ ...formValues, password: '' }));
    }
  }, [clearErrors, reset, setFocus, data]);

  const onSubmit = (authForm) => {
    submit(authForm, { method: 'post' });
  };

  return (
    <StyledSection>
      <div className='signin-section'>
        <form
          method='post'
          className='signin-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='logo'>Logo</h2>
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
            <span>
              <ErrorMessage errors={errors} name='id' />
              {!errors.id && errors.password && (
                <ErrorMessage errors={errors} name='password' />
              )}
            </span>
            <span>{data && data.message}</span>
          </div>
        </form>

        <SignInNavigation />
      </div>
    </StyledSection>
  );
};

export default SignInForm;
