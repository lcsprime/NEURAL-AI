import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/Gallery";
import { capabilities, industries, principles, steps } from "../content";

const slides = [
  {
    image: "/images/hero-studio.jpg",
    kicker: "Irving, Texas",
    title: "Technology that moves your business forward.",
    text: "IT consulting, from the first conversation through implementation.",
    to: "/contact",
    cta: "Get started",
  },
  {
    image: "/images/practice-cloud.jpg",
    kicker: "Cloud and infrastructure",
    title: "The platforms the business already runs on.",
    text: "AWS, Microsoft Azure, Google Cloud, and the network under them.",
    to: "/capabilities#cloud",
    cta: "See cloud work",
  },
  {
    image: "/images/scene-pipeline.jpg",
    kicker: "Security and delivery",
    title: "Advice that continues into the build.",
    text: "Strategy, security, data, and the systems your team will operate.",
    to: "/capabilities",
    cta: "See the practices",
  },
];

export function Home() {
  return (
    <>
      <HeroCarousel slides={slides} />

      <section className="home-facts" aria-label="At a glance">
        <div className="wrap home-facts-row">
          <p>
            <strong>Irving, Texas</strong>
            <span>IT consulting for the systems the business already runs.</span>
          </p>
          <p>
            <strong>One business day</strong>
            <span>A person at the firm replies to a new enquiry.</span>
          </p>
          <p>
            <strong>Same people</strong>
            <span>The people who scope the work stay on it through handover.</span>
          </p>
        </div>
      </section>

      <section className="home-block">
        <div className="wrap">
          <div className="home-lead">
            <h2>The work</h2>
            <p>Strategy, the platforms the business runs on, and the product work a change usually needs.</p>
            <Link to="/capabilities">All capabilities</Link>
          </div>
          <ol className="home-services">
            {capabilities.map((item) => (
              <li key={item.slug}>
                <Link to={item.slug === "staffing" ? "/staffing" : `/capabilities#${item.slug}`}>
                  <span>{item.num}</span>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-block home-block-paper">
        <div className="wrap">
          <div className="home-lead">
            <h2>How an engagement moves</h2>
            <p>A conversation first. A handover when your team can run what was built.</p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.num}>
                <span>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-block">
        <div className="wrap">
          <div className="home-lead">
            <h2>Industries</h2>
            <p>The same practices, inside the constraints of the sector.</p>
            <Link to="/industries">All industries</Link>
          </div>
          <ul className="home-sectors">
            {industries.map((item) => (
              <li key={item.slug}>
                <Link to={`/industries#${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-block home-block-paper">
        <div className="wrap">
          <div className="home-lead">
            <h2>How we work</h2>
            <p>Four rules the engagements actually follow.</p>
          </div>
          <div className="principle-grid">
            {principles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta cta-photo">
        <img src="/images/page-company.jpg" alt="" />
        <div className="wrap cta-inner">
          <h2>Let’s find out if we’re a good fit.</h2>
          <Link className="btn btn-light" to="/contact">
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
