import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setUserPaused(true);
  }, []);

  useEffect(() => {
    if (userPaused || slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [userPaused, slides.length]);

  function go(next) {
    setIndex((next + slides.length) % slides.length);
  }

  const slide = slides[index];

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Introduction"
    >
      {slides.map((item, itemIndex) => (
        <div key={item.kicker} className={itemIndex === index ? "hero-slide on" : "hero-slide"} aria-hidden={itemIndex !== index}>
          <img src={item.image} alt="" />
        </div>
      ))}
      <div className="wrap hero-copy">
        <p className="eyebrow">{slide.kicker}</p>
        <h1>{slide.title}</h1>
        <p className="lede">{slide.text}</p>
        <div className="actions">
          <Link className="btn btn-light" to={slide.to}>
            {slide.cta}
          </Link>
          <Link className="btn btn-ghost" to="/capabilities">
            View capabilities
          </Link>
        </div>
      </div>
      <div className="hero-controls">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide">
          Prev
        </button>
        <div className="hero-dots" role="tablist" aria-label="Slides">
          {slides.map((item, itemIndex) => (
            <button
              key={item.kicker}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={item.kicker}
              className={itemIndex === index ? "on" : undefined}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
        <button type="button" aria-pressed={userPaused} onClick={() => setUserPaused((value) => !value)}>
          {userPaused ? "Play" : "Pause"}
        </button>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next slide">
          Next
        </button>
      </div>
    </section>
  );
}

function Arrow({ direction }) {
  const left = direction === "left";
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d={left ? "M14.5 6.5 L8.5 12 L14.5 17.5" : "M9.5 6.5 L15.5 12 L9.5 17.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CardRail({ title, intro, items }) {
  const scroller = useRef(null);

  function move(direction) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector(".shot");
    const distance = card ? card.getBoundingClientRect().width + 16 : node.clientWidth * 0.8;
    const max = node.scrollWidth - node.clientWidth;
    const next = node.scrollLeft + direction * distance;
    if (direction > 0 && next >= max - 8) {
      node.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction < 0 && node.scrollLeft <= 8) {
      node.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    node.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  useEffect(() => {
    if (items.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => move(1), 4500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <section className="rail" aria-label={title}>
      <div className="wrap rail-head">
        <div>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
      </div>
      <div className="rail-track" ref={scroller}>
        {items.map((item) => (
          <Link key={item.title} className="shot" to={item.to}>
            <img src={item.image} alt="" />
            <span>
              <strong>{item.title}</strong>
              <em>{item.line}</em>
            </span>
          </Link>
        ))}
      </div>
      <div className="wrap rail-nav">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${title}`}>
          <Arrow direction="left" />
        </button>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${title}`}>
          <Arrow direction="right" />
        </button>
      </div>
    </section>
  );
}
