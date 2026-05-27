# learning-charts

A pnpm monorepo exploring different charting libraries and their capabilities.

## Apps

- **[recharts](./apps/recharts/)** - Chart examples using [Recharts](https://recharts.org/)
- **[chartjs](./apps/chartjs/)** - Chart examples using [Chart.js](https://www.chartjs.org/)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 11+

### Install Dependencies

```bash
pnpm install
```

### Run Apps

```bash
# Run recharts app
pnpm --filter @repo/recharts dev

# Run chartjs app
pnpm --filter @repo/chartjs dev
```

### Build Apps

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter @repo/recharts build
```

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible components
- **shadcn** for UI component primitives