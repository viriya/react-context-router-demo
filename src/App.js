import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth-context";
import DonutContext from "./context/donut-context";
import Home from "./pages/home";
import Login from "./pages/login";
import Buy from "./pages/buy";
import Eat from "./pages/eat";
import Navigation from "./components/navigation";
import Container from "react-bootstrap/Container";

function App() {
  // const [isLoggedIn, setLogin] = useState(false)
  const [user, setUser] = useState({ isLoggedIn: false, name: "" });
  const [donut, setDonut] = useState(2);
  const value = { user, setUser };
  const value2 = { donut, setDonut };

  return (
    <AuthContext.Provider value={value}>
      <DonutContext.Provider value={value2}>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Eat" element={<Eat />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>
        </Container>
      </DonutContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
