import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/'
})

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         lessons: 'Course.tsx/index.html',
//         about_atelier: 'Atelier.tsx/index.html',
//       },
//     },
//   },
// });

