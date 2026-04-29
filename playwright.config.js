import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    /* On lance le serveur, tout simplement */
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: true,
    },
    use: {
        baseURL: 'http://localhost:5173',
    },
});