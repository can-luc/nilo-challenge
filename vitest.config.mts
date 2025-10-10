import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setupTests.tsx',
    include: ['**/*.{test,spec}.{ts,tsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
      // fail if coverage is not met
      // all: true, // Uncomment if you want to check all files, not just tested ones
    },
  },
})
