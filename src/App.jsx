import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { pageMeta, site } from "./content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { siteImages } from "./slides";

function PreloadImages() {
  useEffect(() => {
    let index = 0;
    const next = () => {
      if (index >= siteImages.length) return;
      const src = siteImages[index];
      index += 1;
      const image = new Image();
      image.decoding = "async";
      image.onload = next;
      image.onerror = next;
      image.src = src;
    };
    for (let lane = 0; lane < 6; lane += 1) next();
  }, []);
  return null;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? {
      title: "Page not found — Neural AI Computing",
      description: site.name,
    };
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${site.url}${pathname === "/" ? "/" : pathname}`);

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <PreloadImages />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export function PageIntro({ kicker, title, lede, image, tone }) {
  const photoClass = image ? `page-intro page-intro-photo${tone ? ` page-intro-${tone}` : ""}` : "page-intro";
  return (
    <header className={photoClass}>
      {image ? <img src={image} alt="" /> : null}
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{kicker}</span>
        </nav>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
