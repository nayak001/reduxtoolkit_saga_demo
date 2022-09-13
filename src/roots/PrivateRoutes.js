import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const userid = localStorage.getItem("userid");
  const loggedin = localStorage.getItem("loggedin");
  console.log("-->Inside PrivateRoutes localStorage: ", localStorage);
  let token = loggedin == "yes" && userid ? true : false;
  return token ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default PrivateRoutes;
