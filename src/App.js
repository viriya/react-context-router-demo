import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth-context";

import Home from "./pages/home";
import Login from "./pages/login";
import Buy from "./pages/buy";
import Sell from "./pages/sell";
import Navigation from "./components/navigation";
import Container from "react-bootstrap/Container";

function App() {
  const [isLoggedIn, setLogin] = useState(false)
  const value = { isLoggedIn, setLogin }

  return (
    <AuthContext.Provider value={value}>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
