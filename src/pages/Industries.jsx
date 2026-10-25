import { PageIntro } from "../App";
import { industries } from "../content";

export function Industries() {
  return (
    <>
      <PageIntro
        kicker="Industries"
        title="The sectors."
        image="/images/page-industries.jpg"
        tone="day"
        lede="Healthcare, financial services, manufacturing, professional services, retail, and education."
      />
      <div className="wrap follow follow-solo">
        <ol className="simple-list plain">
          {industries.map((item) => (
            <li key={item.slug} id={item.slug}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <ul className="pills">
                  {item.tech.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
