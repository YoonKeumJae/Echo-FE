import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import chatbotReducer from './chatbot';

const store = configureStore({
  reducer: {
    user: userReducer,
    chatbot: chatbotReducer,
  },
});

export default store;
