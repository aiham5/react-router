import "./App.css";
import "./index.css";
import { Routes, Route, Link, Links } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Green from "./components/Green";
import Orange from "./components/Orange";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
          <Link to="/green">Green</Link>
          <Link to="/orange">Orange</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
            <Route path="/orange" element={<Orange />} />
          </Routes>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
