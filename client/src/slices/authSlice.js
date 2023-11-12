import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  role: "",
  first_name: "",
  last_name: "",
  birth_data: "",
  age: 0,
  position:"",
  phone_number: "",
  profile_photo: "",
  tokens: {
    refresh: "",
    access: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        id,
        email,
        role,
        first_name,
        last_name,
        birth_date,
        age,
        phone_number,
        profile_photo,
        position,
        tokens,
      } = action.payload;

      state.id = id;
      state.email = email;
      state.role = role;
      state.first_name = first_name;
      state.last_name = last_name;
      state.birth_data = birth_date;
      state.age = age;
      state.phone_number = phone_number;
      state.profile_photo = profile_photo;
      state.position = position
      state.tokens = tokens;

      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
      localStorage.removeItem("user");
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
