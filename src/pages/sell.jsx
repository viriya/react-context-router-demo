import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const Sell = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="text-center p-4">Sell</div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default Sell;
