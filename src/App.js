import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./pages/navbar/NavBar";
import RootRoute from "./roots/RootRoute";
import LoginRoute from "./roots/LoginRoute";
import Login from "./pages/login/Login";
import React, { useEffect } from "react";

function App() {
  const loggedin = localStorage.getItem("loggedin") == "yes" ? true : false;
  const x = useSelector((state) => state.LoginSlice.loggedin);
  console.log("-->Inside App loggedin: ", loggedin);
  console.log("-->Inside App x: ", x);

  useEffect(() => {
    console.log("-- loggedin chaged localStorage: ", localStorage);
    console.log("-- loggedin chaged x: ", x);
  }, [x]);
  return (
    <>
      <BrowserRouter>
        {loggedin ? (
          <div>
            <NavBar />
            <br />
          </div>
        ) : (
          <div className="page_container"></div>
        )}
        <div className="page_container">
          <RootRoute loggedin={loggedin} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
