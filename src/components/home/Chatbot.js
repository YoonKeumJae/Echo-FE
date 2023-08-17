import { useCallback, useEffect } from 'react';
import { useLocation, useToggle } from 'react-use';
import { useSelector } from 'react-redux';

import chatbotIcon from '@assets/util/chatbot.png';
import store from '@store/configureStore';
import { BackdropDiv } from '@styles/common/Modal-styled';
import {
  initChatbot,
  onChatbot,
  setChatbot,
  endChatbot,
  END_MESSAGE,
} from '@store/chatbot';
import {
  getSection,
  getMessageForSectionOne,
  getMessageForSectionTwo,
  getMessageForSectionThree,
} from '@utils/chatbot';

const Chatbot = () => {
  const { pathname } = useLocation();
  const { message, isOverlay, isSelect, isEnd, isMore } = useSelector(
    (state) => state.chatbot,
  );
  const [isShowMessage, setIsShowMessage] = useToggle(false);

  const onStartChatbot = () => store.dispatch(onChatbot());
  const onCloseChatbot = () => store.dispatch(endChatbot());

  useEffect(() => {
    if (message === END_MESSAGE) {
      setTimeout(() => {
        store.dispatch(initChatbot());
        setIsShowMessage(false);
      }, 2000);
    }
  }, [setIsShowMessage, message]);

  const detectMousePosition = useCallback(
    (e) => {
      // 전체 크기 구하기
      const maxWidth = document.body.offsetWidth;

      // 클릭한 요소의 상대 위치 구하기
      const rect = e.target.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // 클릭한 요소의 섹션 구하기
      const section = getSection(relativeX, maxWidth);

      // 클릭한 요소의 요소 구하기
      let explanation = '';
      if (section === 1) explanation = getMessageForSectionOne(relativeY);
      if (section === 2)
        explanation = getMessageForSectionTwo(relativeY, pathname);
      if (section === 3) explanation = getMessageForSectionThree(relativeY);

      // 요소에 대한 설명 출력하기
      store.dispatch(setChatbot({ message: explanation }));
    },
    [pathname],
  );

  return (
    <>
      {isOverlay && (
        <BackdropDiv
          style={{ background: 'rgba(244, 244, 244, 0.75)' }}
          onClick={detectMousePosition}
        />
      )}
      <div className='chatbot'>
        {isShowMessage && (
          <div className='speech-bubble'>
            <p>{message}</p>

            {isSelect && (
              <div className='button-container'>
                <button className='yes' onClick={onStartChatbot}>
                  예
                </button>
                <button className='no' onClick={onCloseChatbot}>
                  아니오
                </button>
              </div>
            )}
            {isEnd && (
              <div className='button-container'>
                <button className='no' onClick={onCloseChatbot}>
                  종료하기
                </button>
              </div>
            )}
            {isMore && (
              <div className='button-container'>
                <button className='yes' onClick={onStartChatbot}>
                  더 묻기
                </button>
                <button className='no' onClick={onCloseChatbot}>
                  종료하기
                </button>
              </div>
            )}
          </div>
        )}
        <button className='chatbot-img' onClick={setIsShowMessage}>
          <img src={chatbotIcon} alt='chatbot Icon' />
        </button>
      </div>
    </>
  );
};

export default Chatbot;
