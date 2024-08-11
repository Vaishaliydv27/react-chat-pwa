import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 3000,
  },
  base: "/react-chat-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "vite.svg"],
      manifest: {
        short_name: "Chat PWA",
        name: "React Chat PWA",
        icons: [
          {
            src: "/react-chat-pwa/vite.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: "/react-chat-pwa/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
    }),
  ],
});