import { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Donut from "../components/donut";

const Home = () => {
  const { user } = useContext(AuthContext);
  // return (
  return user.isLoggedIn ? <Donut /> : <Navigate to="/login" replace={true} />;

  // );
};

export default Home;
