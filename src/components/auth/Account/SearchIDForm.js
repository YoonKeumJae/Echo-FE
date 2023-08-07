import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SearchIDForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate('/');

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    navigate('?mode=findID');
  };

  return (
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
  );
};

export default SearchIDForm;
