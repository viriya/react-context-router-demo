import { Button, Card, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/auth-context";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ username, password });
    console.log(data);
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: data,
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
    axios
      .post("https://dummyjson.com/auth/login", data, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((resp) => {
        console.log(resp.data)
        setUser({ isLoggedIn: true, name: resp.data.username});
        setUsername('')
        setPassword('')
      })
      .catch((err) => {
        console.log(err)
        alert("error login");
      });
  };

  return (
    <div className="text-center p-4">
      <Card>
        <Card.Header>LOGIN</Card.Header>
        <Card.Body>
          {user.isLoggedIn ? (
            <Navigate to="/" replace={true} />
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
