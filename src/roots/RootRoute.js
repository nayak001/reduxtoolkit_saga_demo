import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import FetchContacts from "../pages/fetch_contacts/FetchContacts";
import SendMessage from "../pages/send_message/SendMessage";
import ShowReports from "../pages/show_reports/ShowReports";
import NoPage from "../pages/no_page/NoPage";

function RootRoute({ loggedin }) {
  //console.log("-->Inside RootRoute loggedin: ", loggedin);
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />}></Route> */}
      {/* <Route index element={<Home />}></Route> */}
      {!loggedin && <Route path="/login" element={<Login />} />}
      {loggedin && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/fetchcontacts" element={<FetchContacts />} />
          <Route path="/sendmessage" element={<SendMessage />} />
          <Route path="/showreports" element={<ShowReports />} />
        </>
      )}
      <Route path="*" element={<Navigate to={loggedin ? "/home" : "/login"} />} />
    </Routes>
  );
}

export default RootRoute;
