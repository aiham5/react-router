import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="container-footer">
      <div id="navbar-footer">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
        <Link to="/green">Green</Link>
        <Link to="/orange">Orange</Link>
      </div>
    </div>
  );
}
