import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageIntro } from "../App";
import { site, topicAliases, topics } from "../content";

const empty = {
  first: "",
  last: "",
  email: "",
  company: "",
  topic: "",
  message: "",
};

export function Contact() {
  const [params] = useSearchParams();
  const requested = params.get("topic") ?? "";
  const preset = topicAliases[requested] ?? (topics.includes(requested) ? requested : "");
  const [form, setForm] = useState({ ...empty, topic: preset });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!preset) return;
    setForm((current) => ({ ...current, topic: preset }));
    setSent(false);
  }, [preset]);

  const mailto = useMemo(() => {
    const name = [form.first, form.last].filter(Boolean).join(" ");
    const subject = form.topic ? `Website inquiry: ${form.topic}` : "Website inquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Topic: ${form.topic || "Not specified"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.first.trim()) next.first = "Enter your first name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid work email.";
    if (!form.message.trim()) next.message = "Describe what you are trying to change.";
    setErrors(next);
    const firstInvalid = ["first", "email", "message"].find((field) => next[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setSent(true);
    window.location.href = mailto;
  }

  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Write to the firm."
        image="/images/page-contact.jpg"
        tone="day"
        lede="Tell us what you are trying to change. We reply within one business day."
      />
      <div className="wrap contact-grid">
        <aside className="note contact-note">
          <h2>{site.location}</h2>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Reply</dt>
              <dd>Within one business day, from a person at the firm.</dd>
            </div>
            <div>
              <dt>Staffing</dt>
              <dd>Requests for additional engineers start on the staffing page.</dd>
            </div>
            <div>
              <dt>This form</dt>
              <dd>It opens your email application. Messages are not stored on this website.</dd>
            </div>
          </dl>
        </aside>

        <div>
          {sent ? (
            <div className="confirm" role="status">
              <h2>Your email draft is ready.</h2>
              <p>
                If your mail application did not open, send the note yourself to {site.email}. We
                reply within one business day.
              </p>
              <p>
                <a href={mailto}>Open the draft again</a>
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              {Object.values(errors).some(Boolean) ? (
                <p className="form-error" role="alert">
                  Check the highlighted fields before preparing the email.
                </p>
              ) : null}
              <div className="row-2">
                <div className="field">
                  <label htmlFor="first">
                    First name <abbr className="req" title="required">*</abbr>
                  </label>
                  <input
                    id="first"
                    name="first"
                    value={form.first}
                    onChange={update}
                    autoComplete="given-name"
                    aria-required="true"
                    aria-invalid={errors.first ? "true" : "false"}
                    aria-describedby={errors.first ? "first-error" : undefined}
                  />
                  {errors.first ? <p id="first-error" className="field-error">{errors.first}</p> : null}
                </div>
                <div className="field">
                  <label htmlFor="last">Last name</label>
                  <input id="last" name="last" value={form.last} onChange={update} autoComplete="family-name" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">
                  Work email <abbr className="req" title="required">*</abbr>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? <p id="email-error" className="field-error">{errors.email}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" value={form.company} onChange={update} autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="topic">What should we talk about?</label>
                <select id="topic" name="topic" value={form.topic} onChange={update}>
                  <option value="">Select a topic</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">
                  The situation <abbr className="req" title="required">*</abbr>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={update}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="What are you trying to change, and what does a useful outcome look like?"
                />
                {errors.message ? <p id="message-error" className="field-error">{errors.message}</p> : null}
              </div>
              <button className="btn" type="submit">
                Prepare email
              </button>
              <p className="form-note">
                This opens a draft in your email app, addressed to {site.email}. Nothing is stored on this site.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
