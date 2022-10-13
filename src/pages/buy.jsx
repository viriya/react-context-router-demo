import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const Buy = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="text-center p-4">Buy</div>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default Buy;
