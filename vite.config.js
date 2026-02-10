import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/DT211G-lab3/",

    build: {
        rollupOptions: {
            input: {
                start: resolve(__dirname, "index.html"),
                SASS: resolve(__dirname, "SASS.html"),
                meny3: resolve(__dirname, "meny3.html"),
                meny4: resolve(__dirname, "meny4.html"),
                meny5: resolve(__dirname, "meny5.html")
            }
        }
    }
});