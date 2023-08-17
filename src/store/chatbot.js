import { createSlice } from '@reduxjs/toolkit';

const START_MESSAGE = '화면 안내가 필요하신가요?';
export const SELECT_MESSAGE = '화면에서 설명이 필요한 부분을 선택해주세요.';
export const END_MESSAGE = '이용해주셔서 감사합니다.';

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState: {
    message: START_MESSAGE,
    isOverlay: false,
    isSelect: true,
    isEnd: false,
    isMore: false,
  },
  reducers: {
    // 챗봇 초기화
    initChatbot: (state) => {
      state.message = START_MESSAGE;
      state.isOverlay = false;
      state.isSelect = true;
      state.isEnd = false;
      state.isMore = false;
    },
    // 화면 안내 시작
    onChatbot: (state) => {
      state.message = SELECT_MESSAGE;
      state.isOverlay = true;
      state.isSelect = false;
      state.isEnd = true;
      state.isMore = false;
    },
    // 메시지 설정
    setChatbot: (state, action) => {
      state.message = action.payload.message;
      state.isOverlay = false;
      state.isSelect = false;
      state.isEnd = false;
      state.isMore = true;
    },
    // 화면 안내 종료
    endChatbot: (state) => {
      state.message = END_MESSAGE;
      state.isOverlay = false;
      state.isSelect = false;
      state.isEnd = false;
      state.isMore = false;
    },
  },
});

export const { initChatbot, setChatbot, onChatbot, endChatbot } =
  chatbotSlice.actions;
export default chatbotSlice.reducer;
