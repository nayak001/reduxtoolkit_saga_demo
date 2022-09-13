import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import FetchContacts from "../pages/fetch_contacts/FetchContacts";
import SendMessage from "../pages/send_message/SendMessage";
import ShowReports from "../pages/show_reports/ShowReports";
import NoPage from "../pages/no_page/NoPage";

import NavBar from "../pages/navbar/NavBar";

function MainRoute() {
  return (
    <>
      {" "}
      <NavBar />
      {/* <Route exact path="/" element={<Home />}></Route> */}
      {/* <Route index element={<Home />}></Route> */}
      <Route path="/home" element={<Home />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/fetchcontacts" element={<FetchContacts />}></Route>
      <Route path="/sendmessage" element={<SendMessage />}></Route>
      <Route path="/showreports" element={<ShowReports />}></Route>
      {/* <Route path="*" element={<NoPage />}></Route> */}
    </>
  );
}

export default MainRoute;
