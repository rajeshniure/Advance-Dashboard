import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'react-chartjs-2', replacement: `${process.cwd()}/node_modules/react-chartjs-2/dist/index.js` },
  { find: 'cookie', replacement: `${process.cwd()}/node_modules/cookie/dist/index.js` },
    ],
  },
  optimizeDeps: {
    include: ['react-chartjs-2', 'chart.js', 'cookie', '@mui/icons-material'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /node_modules\/cookie/, /node_modules\/@mui\//],
    },
    rollupOptions: {
      external: ['@mui/icons-material'],
    },
  },
})
