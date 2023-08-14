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
    editUser: (state, action) => {
      state.nickname = action.payload.nickname;
    },
    logoutUser: (state) => {
      state.accessToken = '';
      state.id = '';
      state.nickname = '';
    },
  },
});

export const { loginUser, editUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
