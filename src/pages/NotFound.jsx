import { Link } from "react-router-dom";
import { nav } from "../content";

export function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="kicker">404</p>
      <h1>That page is not on this site.</h1>
      <p className="lede">The address does not match a page. The work of the firm is on these pages.</p>
      <ul className="not-found-links">
        {nav.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="actions">
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn btn-line" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
