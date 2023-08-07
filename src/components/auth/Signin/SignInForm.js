import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, useActionData, useNavigation } from 'react-router-dom';

import StyledSection from '@styles/auth/signin/SignInForm-styled';
import SignInNavigation from './SignInNavigation';

const SignInForm = () => {
  const { register, reset, setFocus } = useForm();
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (!data) return;

    const { errorCode } = data;

    if (errorCode === 401) {
      setFocus('id');
      reset(() => ({ id: '', password: '' }));
    }
    if (errorCode === 422) {
      setFocus('password');
      reset((formValues) => ({ ...formValues, password: '' }));
    }
  }, [reset, setFocus, data]);

  return (
    <StyledSection>
      <div className='signin-section'>
        <Form method='post' className='signin-form'>
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
              {...register('id')}
              required
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
              {...register('password')}
              required
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
            <span>{data && data.message}</span>
          </div>
        </Form>

        <SignInNavigation />
      </div>
    </StyledSection>
  );
};

export default SignInForm;
