import AuthContext from "../context/auth-context";
import DonutContext from "../context/donut-context";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import Donut from "../components/donut";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Eat = () => {
  const [amount, setAmount] = useState("");
  const { user } = useContext(AuthContext);
  const { setDonut } = useContext(DonutContext);

  const eatHandler = (e) => {
    e.preventDefault();
    console.log(amount);
    setDonut(preDonut => {
      if (preDonut < parseInt(amount)) return 0
      else return  preDonut - parseInt(amount)
    });
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
            <Card.Header>Eat Donut</Card.Header>
            <Card.Body>
              <Form onSubmit={eatHandler}>
                
                  <Form.Label htmlFor="amount">How many pieces</Form.Label>
                  <Form.Control
                    type="text"
                    id="amount"
                    aria-describedby="donut amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-center"
                  />
                
                <Button variant="primary" type="submit" className="mt-2">EAT</Button>
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

export default Eat;
