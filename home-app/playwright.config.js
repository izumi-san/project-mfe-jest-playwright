import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  testDir: './src/tests/e2e',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true, // Para ver a execução do teste no navegador
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // Capturar capturas de tela apenas em caso de falha
    video: 'retain-on-failure', // Manter o vídeo apenas em caso de falha
    trace: 'retain-on-failure' // Manter o trace apenas em caso de falha
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    }
  ],
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
    ['html', { open: 'never' }] // Gera um relatório HTML para visualização detalhada dos testes
  ],
  testMatch: '**/*.e2e.js',
});
