import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (alexanderelizalde.com) serves the site from the root,
// so base stays "/". If you ever drop the custom domain and deploy to
// https://<user>.github.io/resume/, change this to "/resume/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
