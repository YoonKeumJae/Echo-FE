import { useState } from 'react';
import { checkUser } from '@services/user';

const useCheckID = () => {
  const [enteredID, setEnteredID] = useState('');
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
    const response = await checkUser(enteredID);
    const resData = await response.json();

    if (Object.keys(resData).length === 0) {
      // 성공 시
      setIsUniqueID(true);
      setMessage('사용하실 수 있는 아이디입니다.');
      return;
    }

    // 실패 시
    setIsUniqueID(false);
    setMessage('이미 존재하는 아이디입니다.');
  };

  return { enteredID, isUniqueID, onChangeID, checkDuplicate, message };
};

export default useCheckID;
