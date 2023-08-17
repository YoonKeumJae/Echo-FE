import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useSubmit } from 'react-router-dom';

const SearchIDForm = ({ error, isSubmitting }) => {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });
  const submit = useSubmit();

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  const onSubmit = (data) => submit(data, { method: 'post' });

  return (
    <>
      <p className='description'>아이디/비밀번호 찾기</p>

      <div className='account-mode'>
        <p className='selected'>아이디 찾기</p>
        <Link to='/auth/account/password'>비밀번호 찾기</Link>
      </div>
      <form className='account-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <label htmlFor='inputName' className='input-type'>
            사용자 이름
          </label>
          <input
            id='inputName'
            type='text'
            placeholder='이름을 입력해주세요.'
            {...register('name', {
              required: true,
            })}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='inputPhone' className='input-type'>
            휴대폰
          </label>
          <input
            id='inputPhone'
            type='text'
            placeholder='휴대폰 번호를 입력해주세요.'
            {...register('phone', {
              required: true,
            })}
          />
        </div>
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

export default SearchIDForm;
