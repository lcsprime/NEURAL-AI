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
    text: "Technology roadmaps aligned to the business. We audit what is running, say what is not working, and prioritize what actually matters.",
    to: "/capabilities#strategy",
  },
  {
    num: "02",
    title: "Cloud migration and management",
    text: "A move to AWS, Azure, or Google Cloud on your terms. A clear sequence, a planned cutover, and a look at cost after the move.",
    to: "/capabilities#cloud",
  },
  {
    num: "03",
    title: "Cybersecurity and compliance",
    text: "The real exposure for your size and your data, closed first. Policy people can follow, and help preparing for SOC 2, HIPAA, or ISO 27001.",
    to: "/capabilities#security",
  },
  {
    num: "04",
    title: "Network and infrastructure",
    text: "Reliable foundations, from the design through procurement, installation, and a handover your operations staff can run.",
    to: "/capabilities#network",
  },
  {
    num: "05",
    title: "Data and analytics",
    text: "Pipelines, a warehouse, and dashboards, so the numbers match the systems of record and someone can act on them.",
    to: "/capabilities#data",
  },
  {
    num: "06",
    title: "Digital transformation",
    text: "One workflow, changed until it holds. The rest of the estate stays put until that change is stable.",
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
    text: "We get into the systems quickly. The build takes the time it needs to be right.",
  },
  {
    title: "You can see the work",
    text: "Progress, cost, and a change of plan are said out loud. You are not waiting for a final debrief.",
  },
  {
    title: "Outcome first",
    text: "The measure is what changes for the business, not a stack of slides.",
  },
  {
    title: "Knowledge, not dependency",
    text: "When we leave, your team should understand and own what was built.",
  },
];

const sectors = [
  {
    title: "Healthcare",
    text: "Patient data, access, and infrastructure that has to be careful with the record.",
    to: "/industries#healthcare",
  },
  {
    title: "Financial services",
    text: "Systems where access, audit, and a failure you can explain are the work.",
    to: "/industries#financial-services",
  },
  {
    title: "Manufacturing",
    text: "The plant floor connected with a designed path for the data, not an open one.",
    to: "/industries#manufacturing",
  },
  {
    title: "Professional services",
    text: "The tools a firm runs its own delivery on, from records to the work a team repeats.",
    to: "/industries#professional-services",
  },
  {
    title: "Retail and commerce",
    text: "Inventory, orders, and the reporting that has to match the transaction.",
    to: "/industries#retail",
  },
  {
    title: "Education and research",
    text: "Campus systems, identity, and reporting a department can actually afford to run.",
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
            <p>
              We keep the focus on work we can carry from the plan through implementation. Strategy,
              cloud, security, networks, data, and the change that follows.
            </p>
            <Link to="/capabilities">All capabilities</Link>
          </div>
          <ol className="home-practices">
            {practices.map((item) => (
              <li key={item.num}>
                <Link to={item.to}>
                  <span>{item.num}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
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
            <p>
              We start from what you actually need, then figure out how to get there, including when
              the right answer is a tool you already own. The people who scope the work stay on it.
            </p>
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
