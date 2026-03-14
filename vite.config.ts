import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { baseUrl } from "./src/constants/baseUrl";

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl, // <-- replace with your exact GitHub repo name
  plugins: [react(), tailwindcss()],
});
