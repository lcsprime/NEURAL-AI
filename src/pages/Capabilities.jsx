import { Link } from "react-router-dom";
import { PageIntro } from "../App";
import { capabilities } from "../content";

export function Capabilities() {
  return (
    <>
      <PageIntro
        kicker="Capabilities"
        title="The practices."
        image="/images/page-capabilities.jpg"
        tone="day"
        lede="Strategy, cloud, security, networks, data, and the engineering that follows."
      />
      <div className="wrap follow">
        <aside className="note">
          <h2>How it starts</h2>
          <dl>
            <div>
              <dt>First</dt>
              <dd>You describe what you are trying to change.</dd>
            </div>
            <div>
              <dt>Then</dt>
              <dd>The people who scope the work stay on it.</dd>
            </div>
            <div>
              <dt>After</dt>
              <dd>Your team can run what we leave behind.</dd>
            </div>
          </dl>
        </aside>
        <ol className="simple-list">
          {capabilities.map((item) => (
            <li key={item.slug} id={item.slug}>
              <span>{item.num}</span>
              <div>
                <h2>
                  <Link to={`/contact?topic=${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
