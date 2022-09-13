import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userid: "",
    password: "",
    usertype: "",
  },
  loading: false,
  loggedin: false,
  userstatus: "active",
  loginstatus: "error",
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    login_init(state, action) {
      state.user.userid = action.payload.userid;
      state.user.password = action.payload.password;
      state.user.usertype = action.payload.usertype;
      state.loading = true;
      state.loggedin = false;
      state.userstatus = "active";
      state.loginstatus = "error";
    },
    login_end(state, action) {
      console.log(action);
      state.user.userid = action.payload.userid;
      state.user.password = action.payload.password;
      state.user.usertype = action.payload.usertype;
      state.loading = false;
      state.userstatus = action.payload.status;
      state.loginstatus = action.payload.success;
      if (action.payload.success === "success") {
        state.loggedin = true;
        localStorage.setItem("userid", action.payload.userid);
        localStorage.setItem("loggedin", "yes");
      } else {
        state.loggedin = false;
        localStorage.clear();
      }
    },

    logout(state, action) {
      state.user.userid = "";
      state.user.password = "";
      state.user.usertype = "";
      state.loading = false;
      state.loggedin = false;
      state.userstatus = "active";
      state.loginstatus = "error";
      localStorage.clear();
    },
  },
});

export const { login_init, login_end, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
