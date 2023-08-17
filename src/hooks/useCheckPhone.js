import { useState } from 'react';
import { useTimer } from 'use-timer';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';

import firebaseConfig from '@config/firebaseConfig';

initializeApp(firebaseConfig);
export const auth = getAuth();

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

  const onSendCode = (phoneNumber) => {
    if (sendCount <= 0) return;

    // 인증번호 전송 로직
    const koreaPhoneNumber = `+1${phoneNumber}`;
    auth.languageCode = 'ko';

    const appVerifier = window.recaptchaVerifier;

    // 휴대폰번호에 +82 추가
    signInWithPhoneNumber(auth, koreaPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        // success
        if (sendCount === 3) alert('인증번호를 전송하였습니다.');
        else alert('인증번호를 재전송하였습니다.');
        window.confirmationResult = confirmationResult;

        setIsSend(true);
        resetTime();
        start();
        setSendCount((prevCount) => prevCount - 1);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const onVerifyCode = async (code) => {
    if (status === 'STOPPED') {
      alert('인증번호 입력 시간이 만료되었습니다.');
      return;
    }

    // 일시 정지
    pause();

    await window.confirmationResult
      .confirm(code)
      .then(() => {
        // success
        // 휴대폰 인증 완료시
        alert('인증번호가 확인되었습니다.');
        setIsVerify(true);
      })
      .catch(() => {
        // fail
        alert('인증번호가 일치하지 않습니다');
        start();
      });
  };

  const resetVerify = () => {
    setIsSend(false);
    setSendCount(3);
    setIsVerify(false);
  };

  return {
    timer,
    isSend,
    sendCount,
    isVerify,
    onSendCode,
    onVerifyCode,
    resetVerify,
  };
};

export default useCheckPhone;
