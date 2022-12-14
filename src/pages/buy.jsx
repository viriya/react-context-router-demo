import AuthContext from "../context/auth-context";
import DonutContext from "../context/donut-context";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import Donut from "../components/donut";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Buy = () => {
  const [amount, setAmount] = useState("");
  const { user } = useContext(AuthContext);
  const { setDonut } = useContext(DonutContext);

  const buyHandler = (e) => {
    e.preventDefault();
    console.log(amount);
    setDonut(preDonut => preDonut + parseInt(amount));
    setAmount("");
  };

  return (
    <>
      {user.isLoggedIn ? (
        <div className="text-center p-4">
          <Card
            border="secondary"
            style={{ width: "18rem" }}
            className="mx-auto"
          >
            <Card.Header>Buy Donut</Card.Header>
            <Card.Body>
              <Form onSubmit={buyHandler}>
                
                  <Form.Label htmlFor="amount">How many pieces</Form.Label>
                  <Form.Control
                    type="text"
                    id="amount"
                    aria-describedby="donut amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-center"
                  />
                
                <Button variant="primary" type="submit" className="mt-2">BUY</Button>
              </Form>
            </Card.Body>
          </Card>

          <Donut />
        </div>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default Buy;
