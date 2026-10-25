import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const visitorId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function chicagoDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function visitsPlugin() {
  const file = path.resolve("data/visits.json");

  return {
    name: "unique-visits",
    configureServer(server) {
      server.middlewares.use("/api/visits", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify({ error: "POST only" }));
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
          if (body.length > 200) req.destroy();
        });
        req.on("end", () => {
          let id = "";
          try {
            id = String(JSON.parse(body || "{}").id || "");
          } catch {
            id = "";
          }
          if (!visitorId.test(id)) {
            res.statusCode = 400;
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify({ error: "missing id" }));
            return;
          }

          fs.mkdirSync(path.dirname(file), { recursive: true });
          let saved = [];
          try {
            const store = JSON.parse(fs.readFileSync(file, "utf8"));
            if (store.day === chicagoDay() && Array.isArray(store.ids)) saved = store.ids;
          } catch {
            saved = [];
          }
          const ids = new Set(saved);
          ids.add(id);
          fs.writeFileSync(file, JSON.stringify({ day: chicagoDay(), ids: [...ids] }));
          res.setHeader("content-type", "application/json");
          res.setHeader("cache-control", "no-store");
          res.end(JSON.stringify({ today: ids.size }));
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), visitsPlugin()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
