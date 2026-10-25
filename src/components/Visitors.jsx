import { useEffect, useState } from "react";

const storageKey = "nac-visitor";

export function Visitors() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let id = "";
    try {
      id = localStorage.getItem(storageKey) || "";
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(storageKey, id);
      }
    } catch {
      return;
    }

    const controller = new AbortController();
    fetch("/api/visits", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data && Number.isInteger(data.today)) setCount(data.today);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (count == null) return null;

  return (
    <p className="visit-count">
      {count.toLocaleString("en-US")} {count === 1 ? "visitor" : "visitors"} today
    </p>
  );
}
