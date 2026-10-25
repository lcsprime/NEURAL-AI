import { Link } from "react-router-dom";
import { PageIntro } from "../App";
import { principles, site } from "../content";

export function Company() {
  return (
    <>
      <PageIntro
        kicker="Company"
        title="The firm."
        image="/images/page-company.jpg"
        tone="day"
        lede="An IT consulting firm in Irving, Texas. We plan, implement, and run the systems the business depends on."
      />
      <div className="wrap follow">
        <div>
          <p className="kicker">The firm</p>
          <h2>The people who scope the work stay on it.</h2>
          <p>
            Strategy first, then cloud, security, networks, data, and the product work a change
            usually needs. Most of it lands on AWS, Microsoft Azure, Google Cloud, or Cloudflare.
          </p>
          <Link className="btn space-top" to="/contact">
            Talk with the firm
          </Link>
        </div>
        <aside className="note">
            <h2>On the record</h2>
            <dl>
              <div>
                <dt>Legal name</dt>
                <dd>{site.legal}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>IT strategy, cloud, security, networks, data, and product development.</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
        </aside>
      </div>

      <section className="section section-rule">
        <div className="wrap">
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
    </>
  );
}
