import { useState } from 'react';

const useCheckID = () => {
  const [enteredID, setEnteredID] = useState('');
  const [checkedID, setCheckedID] = useState('');
  const [isUniqueID, setIsUniqueID] = useState(false);
  const [message, setMessage] = useState('');

  // enteredID 수정, 아이디 중복체크 초기화, 메시지 초기화
  const onChangeID = (e) => {
    const inputID = e.target.value;
    setEnteredID(inputID);
    setIsUniqueID(false);
    setMessage('');
  };

  // 중복 체크 함수
  const checkDuplicate = async () => {
    // 중복체크 로직
    // const response = await getOne(data, type);
    // eslint-disable-next-line no-console
    console.log(checkedID);

    // 실패 시
    // setIsUniqueID(false);
    // setCheckedID('');
    // setMessage('이미 존재하는 아이디입니다.');

    // 성공 시
    setIsUniqueID(true);
    setCheckedID(enteredID);
    setMessage('사용하실 수 있는 아이디입니다.');
  };

  return { enteredID, isUniqueID, onChangeID, checkDuplicate, message };
};

export default useCheckID;
