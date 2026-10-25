import { Link } from "react-router-dom";
import { PageIntro } from "../App";
import { site } from "../content";

const flow = [
  { num: "01", title: "The gap", text: "You tell us which seat is empty." },
  { num: "02", title: "The role", text: "We write it against the stack and the work." },
  { num: "03", title: "The search", text: `${site.partner.name} helps find people who fit.` },
  { num: "04", title: "The start", text: "Rate, duration, and responsibilities are agreed in writing." },
];

export function Staffing() {
  return (
    <>
      <PageIntro
        kicker="IT staffing"
        title="Additional engineers."
        image="/images/page-staffing.jpg"
        tone="day"
        lede="Placed against a role written for the program."
      />

      <div className="wrap follow">
        <div>
          <p className="kicker">The arrangement</p>
          <h2>One conversation for the seat.</h2>
          <p>
            {site.name} writes the role.{" "}
            <a href={site.partner.url} target="_blank" rel="noreferrer">
              {site.partner.name}
            </a>{" "}
            helps find the person. If the need is “build this,” start with{" "}
            <Link to="/capabilities">capabilities</Link>.
          </p>
          <ol className="steps steps-stack">
            {flow.map((step) => (
              <li key={step.num}>
                <span>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="actions space-top">
            <Link className="btn" to="/contact?topic=staffing">
              Request staffing
            </Link>
          </div>
        </div>
        <aside className="note">
            <h2>Who does what</h2>
            <dl>
              <div>
                <dt>{site.name}</dt>
                <dd>Defines the program, the stack, and the role. Stays accountable for technical fit.</dd>
              </div>
              <div>
                <dt>{site.partner.name}</dt>
                <dd>Collaborates on sourcing and placement of IT talent for that role.</dd>
              </div>
              <div>
                <dt>You</dt>
                <dd>Meet the candidates, and agree the terms before a start date.</dd>
              </div>
              <div>
                <dt>Their site</dt>
                <dd>
                  <a href={site.partner.url} target="_blank" rel="noreferrer">
                    {site.partner.url.replace("https://", "")}
                  </a>
                </dd>
              </div>
            </dl>
        </aside>
      </div>
    </>
  );
}
