import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/Gallery";

const slides = [
  {
    image: "/images/hero-studio.jpg",
    kicker: "Irving, Texas",
    title: "Technology that moves your business forward.",
    text: "An IT consulting firm helping organizations plan, implement, and optimize the systems that power their operations.",
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

const ribbon = [
  "IT strategy",
  "Cloud migration",
  "Cybersecurity",
  "Network infrastructure",
  "Data and analytics",
  "Digital transformation",
  "Product development",
  "IoT and sensors",
  "IT staffing",
];

const practices = [
  {
    num: "01",
    title: "IT strategy and advisory",
    text: "What to change, and in what order.",
    image: "/images/rail-strategy.jpg",
    to: "/capabilities#strategy",
  },
  {
    num: "02",
    title: "Cloud migration and management",
    text: "A sequenced move onto AWS, Azure, or Google Cloud.",
    image: "/images/rail-cloud.jpg",
    to: "/capabilities#cloud",
  },
  {
    num: "03",
    title: "Cybersecurity and compliance",
    text: "The risks that matter for your size and your data.",
    image: "/images/rail-security.jpg",
    to: "/capabilities#security",
  },
  {
    num: "04",
    title: "Network and infrastructure",
    text: "The network the applications depend on.",
    image: "/images/rail-network.jpg",
    to: "/capabilities#network",
  },
  {
    num: "05",
    title: "Data and analytics",
    text: "Reporting that matches the systems of record.",
    image: "/images/rail-data.jpg",
    to: "/capabilities#data",
  },
  {
    num: "06",
    title: "Digital transformation",
    text: "One workflow, changed until it holds.",
    image: "/images/rail-change.jpg",
    to: "/capabilities#transformation",
  },
];

const also = [
  { title: "Product development", text: "Software your team can run after we leave.", to: "/capabilities#product-development" },
  { title: "IoT and sensor systems", text: "From the sensor to someone who can act.", to: "/capabilities#iot" },
  { title: "IT staffing", text: "Engineers placed against a written role.", to: "/staffing" },
];

const points = [
  {
    title: "Fast to diagnose, careful to build",
    text: "We get into the systems quickly. The build takes the time it needs.",
  },
  {
    title: "You can see the work",
    text: "Progress, cost, and a change of plan are said out loud.",
  },
  {
    title: "Outcome first",
    text: "The measure is what changes for the business.",
  },
  {
    title: "Knowledge, not dependency",
    text: "Your team should understand and own what was built.",
  },
];

const sectors = [
  {
    title: "Healthcare",
    text: "Careful systems around the clinical record.",
    to: "/industries#healthcare",
  },
  {
    title: "Financial services",
    text: "Access, audit, and the systems around them.",
    to: "/industries#financial-services",
  },
  {
    title: "Manufacturing",
    text: "The plant floor, connected without opening it up.",
    to: "/industries#manufacturing",
  },
  {
    title: "Professional services",
    text: "Tools a firm can run its own delivery on.",
    to: "/industries#professional-services",
  },
  {
    title: "Retail and commerce",
    text: "Inventory, orders, and the path between them.",
    to: "/industries#retail",
  },
  {
    title: "Education and research",
    text: "Dependable systems on a real budget.",
    to: "/industries#education",
  },
];

export function Home() {
  const loop = [...ribbon, ...ribbon];
  return (
    <>
      <HeroCarousel slides={slides} />

      <section className="home-belief">
        <div className="wrap">
          <p className="kicker">People-first technology</p>
          <h2>Great IT is built around the people who use it every day.</h2>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="home-block">
        <div className="wrap">
          <div className="home-lead">
            <h2>Six practice areas. One firm.</h2>
            <p>The work we carry from the plan through implementation.</p>
            <Link to="/capabilities">All capabilities</Link>
          </div>
          <ol className="home-practices">
            {practices.map((item) => (
              <li key={item.num}>
                <Link to={item.to}>
                  <img src={item.image} alt="" />
                  <span className="practice-copy">
                    <span>{item.num}</span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <ul className="home-also">
            {also.map((item) => (
              <li key={item.title}>
                <Link to={item.to}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-block home-block-paper">
        <div className="wrap">
          <div className="home-lead">
            <h2>A firm, not a vendor.</h2>
            <p>We start from what you need. The people who scope the work stay on it.</p>
            <Link to="/company">About the firm</Link>
          </div>
          <div className="home-points">
            {points.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block">
        <div className="wrap">
          <div className="home-lead">
            <h2>Sectors we serve</h2>
            <p>The same practices, inside the constraints of the sector.</p>
            <Link to="/industries">All industries</Link>
          </div>
          <ul className="home-sectors">
            {sectors.map((item) => (
              <li key={item.title}>
                <Link to={item.to}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta cta-photo">
        <img src="/images/page-company.jpg" alt="" />
        <div className="wrap cta-inner">
          <div>
            <h2>Let’s find out if we’re a good fit.</h2>
            <p>Tell us what you are trying to change. A person at the firm replies within one business day.</p>
          </div>
          <Link className="btn btn-light" to="/contact">
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
