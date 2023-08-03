import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import kakao from '@assets/kakao.png';
import { singinAPI } from '@services/auth';
import StyledSignin from '@styles/auth/Signin-styled';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetStatus,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    const response = await singinAPI(data);

    // 로그인 성공
    if (response.status === 200) {
      // eslint-disable-next-line no-console
      console.log('로그인 성공!'); // redirect 조정 필요
      return;
    }

    // ID가 존재하지 않는 경우
    if (response.status === 401) {
      resetStatus(() => ({ id: '', password: '' }));
      setError(
        'id',
        {
          type: response.statusText,
          message: '존재하지 않는 아이디 입니다.',
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
          message: '비밀번호가 일치하지 않습니다.',
        },
        { shouldFocus: true },
      );
    }

    // 내부 서버 오류
    if (response.status === 500) {
      setError('password', {
        type: response.statusText,
        message: '서버와의 연결이 원활하지 않습니다.',
      });
    }
  };

  return (
    <StyledSignin>
      <form className='signin-form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='logo'>Logo</h2>
        <p className='description'>서비스에 로그인하기</p>
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
        <div className='button-container'>
          <button
            className='submit-button'
            type='submit'
            disabled={isSubmitting}
          >
            로그인
          </button>
          <p className='link-text'>회원가입</p>
        </div>
        <div className='error-container'>
          <span>
            <ErrorMessage errors={errors} name='id' />
            {!errors.id && errors.password && (
              <ErrorMessage errors={errors} name='password' />
            )}
          </span>
        </div>
        <div className='divider'>
          <p>또는</p>
        </div>
        <div className='social-login'>
          <button type='button'>
            <img src={kakao} width={320} />
          </button>
        </div>
        <p className='footer'>
          가입하신 계정을 잊으셨나요?
          <span className='link-text'>계정찾기</span>
        </p>
      </form>
    </StyledSignin>
  );
};

export default Signin;
