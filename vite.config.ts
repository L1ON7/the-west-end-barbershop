import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  nitro: process.env.VERCEL ? { preset: "vercel" } : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      process.env.VERCEL ? nitro({ preset: "vercel" }) : undefined,
    ].filter(Boolean),
  },
});

