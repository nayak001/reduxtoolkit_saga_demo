import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import NoPage from "../pages/no_page/NoPage";

function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="*" element={<NoPage />}></Route> */}
    </Routes>
  );
}

export default LoginRoute;
