import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageIntro } from "../App";
import { technologies, technologyGroups } from "../content";

export function Technologies() {
  const [group, setGroup] = useState("All");
  const visible = useMemo(
    () => technologies.filter((item) => group === "All" || item.group === group),
    [group],
  );
  const sections = (group === "All" ? technologyGroups.slice(1) : [group]).filter((name) =>
    visible.some((item) => item.group === name),
  );

  return (
    <>
      <PageIntro
        kicker="Technologies"
        title="The stack."
        image="/images/page-technologies.jpg"
        lede="Languages, cloud, data, security, infrastructure, and specialized platforms."
      />
      <div className="wrap follow follow-solo">
        <div className="filter-wrap">
          <div className="filter-bar" role="tablist" aria-label="Filter technologies">
            {technologyGroups.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={group === item}
                className={group === item ? "on" : undefined}
                onClick={() => setGroup(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="filter-count" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? "technology" : "technologies"}
            {group === "All" ? "" : ` in ${group}`}
          </p>
        </div>
        <div className="tech-catalog">
          {sections.map((name) => (
            <section key={name}>
              <h2>{name}</h2>
              <ul>
                {visible
                  .filter((item) => item.group === name)
                  .map((item) => (
                    <li key={item.slug} id={item.slug}>
                      <Link to={`/contact?topic=${item.slug}`}>{item.name}</Link>
                      <p>{item.headline}</p>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
