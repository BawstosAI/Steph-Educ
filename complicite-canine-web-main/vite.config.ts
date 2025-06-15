import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Steph-Educ/' : '/',
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name;
          if (name && (name.endsWith('.jpg') || name.endsWith('.png'))) {
            return 'lovable-uploads/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));
