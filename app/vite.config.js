import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            // ../../../components/blahblah 파일 깊이가 깊어질수록 ../가 길어지므로 @/만 쓰면 바로 .src 폴더가 되도록 설정
        },
    },
})
