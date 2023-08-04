import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import { authAPI } from '@services/auth';
import StyledSignin from '@styles/auth/Signin-styled';
import SigninNavigation from './SigninNavigation';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetStatus,
    setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    const response = await authAPI(data, 'login', 'POST');
    const resData = await response.json();

    // 로그인 성공
    if (response.status === 200) {
      const { token } = resData;

      localStorage.setItem('token', token);
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem('expiration', expiration.toISOString());

      navigate('/');
      return;
    }

    // ID가 존재하지 않는 경우
    if (response.status === 401) {
      resetStatus(() => ({ id: '', password: '' }));
      setError(
        'id',
        {
          type: response.statusText,
          message: resData.message,
        },
        { shouldFocus: true },
      );
    }

    // 패스워드가 일치하지 않을 경우
    if (response.status === 422) {
      resetStatus((formValues) => ({ ...formValues, password: '' }));
      setError(
        'password',
        {
          type: response.statusText,
          message: resData.message,
        },
        { shouldFocus: true },
      );
    }

    // 내부 서버 오류
    if (response.status === 500) {
      setError('password', {
        type: response.statusText,
        message: resData.message,
      });
    }
  };

  return (
    <StyledSignin>
      <div className='signin-section'>
        <form className='signin-form' onSubmit={handleSubmit(onSubmit)}>
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
          </div>
        </form>

        <SigninNavigation />
      </div>
    </StyledSignin>
  );
};

export default Signin;
