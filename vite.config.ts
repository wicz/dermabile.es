import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  clearScreen: false,
  plugins: [
    tailwindcss(),
    RubyPlugin(),
  ],
});
