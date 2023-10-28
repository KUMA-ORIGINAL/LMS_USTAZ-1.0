import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  role: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  age: 0,
  phoneNumber: "",
  profilePicture: "",
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
        profile_picture,
        tokens,
      } = action.payload;

      state.id = id;
      state.email = email;
      state.role = role;
      state.firstName = first_name;
      state.lastName = last_name;
      state.birthDate = birth_date;
      state.age = age;
      state.phoneNumber = phone_number;
      state.profilePicture = profile_picture;
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
