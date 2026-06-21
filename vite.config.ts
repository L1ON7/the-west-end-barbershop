import { defineConfig } from "@lovable.dev/vite-tanstack-config";

let preset;
if (process.env.NETLIFY) preset = "netlify";
else if (process.env.VERCEL) preset = "vercel";

export default defineConfig({
  nitro: preset ? { preset } : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});

