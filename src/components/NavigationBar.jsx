import { Link } from "react-router";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navigationBox">
      <h2>Mi barra de navegacion</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Create new</Link>
        </li>
        <li>
          <Link to="/list">Books articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
