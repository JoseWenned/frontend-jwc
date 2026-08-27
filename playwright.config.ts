import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./src/tests/e2e",

    // Execução sequencial para evitar concorrência durante os testes locais
    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    // Um único worker local e na CI
    workers: 1,

    reporter: "html",

    use: {
        baseURL: "http://localhost:5173",

        trace: "on-first-retry",

        screenshot: "only-on-failure",

        video: "retain-on-failure",
    },

    projects: [
        {
            name: "chromium",

            use: {
                ...devices["Desktop Chrome"],
            },
        },
    ],

    webServer: {
        command: "npm run dev -- --host 127.0.0.1 --port 5173",
        
        url: "http://localhost:5173",

        // O Playwright inicia seu próprio Vite
        reuseExistingServer: false,
        
        timeout: 120_000,
    },
});