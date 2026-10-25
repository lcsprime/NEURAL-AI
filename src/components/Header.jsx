import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { industries, site, technologies } from "../content";

function releaseFocus(event) {
  const root = event.currentTarget;
  const active = document.activeElement;
  const next = event.relatedTarget;
  if (!(active instanceof HTMLElement) || !root.contains(active)) return;
  if (next instanceof Node && root.contains(next)) return;
  active.blur();
}

function Menu({ menu }) {
  const ref = useRef(null);
  return (
    <div className="menu" ref={ref} onMouseLeave={releaseFocus}>
      <NavLink to={menu.to} onClick={releaseFocus}>
        {menu.label}
        <svg className="caret" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 L6 8 L9.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavLink>
      <div className="menu-panel">
        {menu.items.map((item) => (
          <Link key={item.to} to={item.to} onClick={releaseFocus}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const featured = technologies.filter((item) => item.featured);

const menus = [
  {
    label: "Industries",
    to: "/industries",
    items: industries.map((item) => ({ label: item.title, to: `/industries#${item.slug}` })),
  },
  {
    label: "Technologies",
    to: "/technologies",
    items: [
      { label: "Overview", to: "/technologies" },
      ...featured.map((item) => ({ label: item.name, to: `/technologies#${item.slug}` })),
    ],
  },
  {
    label: "Company",
    to: "/company",
    items: [
      { label: "About the firm", to: "/company" },
      { label: "Capabilities", to: "/capabilities" },
      { label: "Staffing", to: "/staffing" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap nav-bar">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <img className="mark" src="/favicon.svg?v=3" alt="" width="30" height="30" />
          <span className="brand-name">{site.name}</span>
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} aria-label="Primary">
          {menus.slice(0, 2).map((menu) => (
            <Menu key={menu.label} menu={menu} />
          ))}
          <NavLink to="/capabilities">Capabilities</NavLink>
          <Menu menu={menus[2]} />
          <NavLink className="nav-cta" to="/contact">
            Get started
          </NavLink>
        </nav>
      </div>
      {open ? (
        <button className="nav-backdrop" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  );
}
