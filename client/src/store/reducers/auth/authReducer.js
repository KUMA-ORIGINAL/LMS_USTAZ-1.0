import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  accessToken: null,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: action.payload.email,
          accestoken: action.payload.token,
        })
      );
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
  },
});

// Define your selector to correctly access the auth state
export const selectAuth = (state) => state.auth;

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

// export const selectAuth = (state) => state.auth
// import { createSlice } from '@reduxjs/toolkit'

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     accessToken: null,
//     refreshToken: null,
//     authorized: false,
//     error: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload
//     },
//     setAccess: (state, action) => {
//       state.accessToken = action.payload.accessToken
//       state.authorized = true
//     },
//     setRefresh: (state, action) => {
//       state.refreshToken = action.payload.refreshToken
//     },
//     setError: (state, action) => {
//       state.error = action.payload
//       state.authorized = false
//     },
//   },
// })

// export const { setUser, setAccess, setRefresh, setError } = authSlice.actions

// export default authSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   accessToken: null, // Токен доступа
//   refreshToken: null, // Токен обновления
//   isAuthenticated: false, // Флаг авторизации
//   loading: false, // Флаг загрузки данных
//   error: null, // Ошибка при авторизации (если есть)
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     // Действие для начала загрузки данных (например, при отправке запроса на сервер)
//     startLoading: (state) => {
//       state.loading = true;
//     },

//     // Действие для успешной авторизации
//     loginSuccess: (state, action) => {
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.error = null;
//     },

//     // Действие для выхода из системы
//     logout: (state) => {
//       state.accessToken = null;
//       state.refreshToken = null;
//       state.isAuthenticated = false;
//       state.loading = false;
//     },

//     // Действие для обработки ошибок при авторизации
//     authError: (state, action) => {
//       state.error = action.payload;
//       state.isAuthenticated = false;
//       state.loading = false;
//     },
//   },
// });

// export const { startLoading, loginSuccess, logout, authError } = authSlice.actions;

// export default authSlice.reducer;
