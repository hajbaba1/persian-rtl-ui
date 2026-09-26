import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'unplugin-dts/vite'
import { resolve } from 'node:path'
export default defineConfig({plugins:[react(),tailwindcss(),dts({entryRoot:'src',rollupTypes:true})],build:{lib:{entry:resolve(import.meta.dirname,'src/index.ts'),formats:['es'],fileName:'index',cssFileName:'styles'},rollupOptions:{external:['react','react-dom','react/jsx-runtime']}}})