import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
  }
});
