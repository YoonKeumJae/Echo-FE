import { useState } from 'react';
import { useTimer } from 'use-timer';

const useCheckPhone = () => {
  const {
    time,
    start,
    pause,
    reset: resetTime,
    status,
  } = useTimer({
    initialTime: 180,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  const [isSend, setIsSend] = useState(false);
  const [sendCount, setSendCount] = useState(3);
  const [isVerify, setIsVerify] = useState(false);

  const timer = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  const onSendCode = () => {
    if (sendCount <= 0) return;

    alert('인증번호를 전송하였습니다.');

    // 인증번호 전송 로직

    setIsSend(true);
    resetTime();
    start();
    setSendCount((prevCount) => prevCount - 1);
  };

  const onVerifyCode = async () => {
    if (status === 'STOPPED') {
      alert('인증번호 입력 시간이 만료되었습니다.');
      return;
    }

    // 일시 정지
    pause();

    // 휴대폰 인증 로직
    // const response = await api...default.

    // 휴대폰 인증 실패시
    // alert('인증번호가 일치하지 않습니다.');
    // start();

    // 휴대폰 인증 완료시
    alert('인증번호가 확인되었습니다.');
    setIsVerify(true);
  };

  return {
    timer,
    isSend,
    sendCount,
    isVerify,
    onSendCode,
    onVerifyCode,
  };
};

export default useCheckPhone;
