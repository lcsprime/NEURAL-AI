const visitorId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const memory = new Map();

function chicagoDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

async function visits(request) {
  const headers = { "cache-control": "no-store" };
  if (request.method !== "POST") {
    return Response.json({ error: "POST only" }, { status: 405, headers });
  }

  let id = "";
  try {
    id = String((await request.json())?.id || "");
  } catch {
    id = "";
  }
  if (!visitorId.test(id)) {
    return Response.json({ error: "missing id" }, { status: 400, headers });
  }

  const day = chicagoDay();
  const cacheKey = new Request(`https://neural-ai-computing.internal/visits/${day}`);
  let ids = memory.get(day);
  if (!ids) {
    ids = new Set();
    try {
      const cached = await caches.default.match(cacheKey);
      const saved = cached ? await cached.json() : [];
      if (Array.isArray(saved)) saved.forEach((item) => ids.add(item));
    } catch {
      /* the in-memory set still counts this isolate */
    }
    memory.set(day, ids);
    for (const key of memory.keys()) {
      if (key !== day) memory.delete(key);
    }
  }

  ids.add(id);
  try {
    await caches.default.put(
      cacheKey,
      new Response(JSON.stringify([...ids]), {
        headers: { "cache-control": "public, max-age=86400" },
      }),
    );
  } catch {
    /* memory still has today's visitors for this isolate */
  }

  return Response.json({ today: ids.size }, { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("ok", {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    if (url.pathname === "/api/visits") return visits(request);

    return env.ASSETS.fetch(request);
  },
};
