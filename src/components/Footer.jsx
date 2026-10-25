import { Link } from "react-router-dom";
import { capabilities, site, technologies } from "../content";
import { Visitors } from "./Visitors";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-name">{site.legal}</p>
          <p>IT consulting in {site.location}.</p>
        </div>
        <div>
          <h2>Capabilities</h2>
          <ul>
            {capabilities.slice(0, 6).map((item) => (
              <li key={item.slug}>
                <Link to={`/capabilities#${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Technologies</h2>
          <ul>
            {technologies
              .filter((item) => item.featured)
              .map((item) => (
                <li key={item.slug}>
                  <Link to={`/technologies#${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            <li>
              <Link to="/technologies">Full technology index</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Firm</h2>
          <ul>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/staffing">Staffing</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          © {year} {site.legal}. All rights reserved.
        </p>
        <Visitors />
        <a href="#main">Back to top</a>
      </div>
    </footer>
  );
}
