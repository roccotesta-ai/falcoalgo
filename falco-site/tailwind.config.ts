import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0F19", graphite: "#111827", slate: "#334155",
        electric: "#3B82F6", aqua: "#22D3EE", lime: "#84CC16", offwhite: "#E5E7EB"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.15)" }
    }, container: { center: true, padding: "1.5rem" }
  }, plugins: [],
} satisfies Config;
