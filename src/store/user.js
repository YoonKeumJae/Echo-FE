import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'tasks',
  initialState: {
    accessToken: '',
    id: '',
    nickname: '',
  },
  reducers: {
    loginUser: (state, action) => {
      const { accessToken, id, nickname } = action.payload;

      state.accessToken = accessToken;
      state.id = id;
      state.nickname = nickname;
    },
    logoutUser: (state) => {
      state.accessToken = '';
      state.id = '';
      state.nickname = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
