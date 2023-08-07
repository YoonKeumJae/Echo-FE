import { useForm } from 'react-hook-form';

const SearchID = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    onSuccess();
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

export default SearchID;
