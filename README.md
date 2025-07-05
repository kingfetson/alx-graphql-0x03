# alx-graphql-0x03 – Error Boundary in React with TypeScript

This project demonstrates implementing and using an `ErrorBoundary` class component in a Next.js + TypeScript application. The app fetches data from the Rick and Morty GraphQL API and includes proper error handling using React error boundaries and Sentry integration.

## 🚀 Objective

The goal of this project is to:
- Implement a robust `ErrorBoundary` class in TypeScript.
- Gracefully handle JavaScript errors in React components.
- Test the boundary with a faulty component.
- Integrate an external error monitoring tool (Sentry).

---

## 📁 Project Structure

alx-rick-and-morty-app/
├── components/
│ ├── common/
│ │ └── EpisodeCard.tsx
│ ├── ErrorBoundary.tsx
│ └── ErrorProneComponent.tsx
├── graphql/
│ └── queries.ts
├── interfaces/
│ └── index.ts
├── pages/
│ ├── _app.tsx
│ └── index.tsx
├── public/
├── styles/
│ └── globals.css
├── package.json
└── README.md

---


## 🛠️ Installation & Setup

1. **Duplicate the previous project**
   ```bash
   cp -r alx-graphql-0x02 alx-graphql-0x03
   cd alx-graphql-0x03/alx-rick-and-morty-app

### 1. Clone the repository

git clone https://github.com/kingfetson/alx-graphql-0x02.git
cd alx-graphql-0x02/alx-rick-and-morty-app
2. Install dependencies
npm install
3. Run the development server
npm run dev
Visit: http://localhost:3000

### ErrorBoundary Component
Create components/ErrorBoundary.tsx:

import React, { ReactNode } from 'react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
    // Optional: Replace with a monitoring service like Sentry
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

### Wrap the Application with ErrorBoundary
Edit pages/_app.tsx:

import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;

### ⚠️ Test Error Handling
Create components/ErrorProneComponent.tsx:

import React from 'react';

const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error!');
};

export default ErrorProneComponent;

Update pages/index.tsx:

import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;

### 🧭 Monitor & Log Errors (e.g. with Sentry)
Install Sentry
npm install @sentry/react @sentry/nextjs

Update ErrorBoundary.tsx
import * as Sentry from '@sentry/react';
Modify componentDidCatch:
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}
Initialize Sentry
(Follow Sentry Next.js Docs to complete setup.)

Trigger Error
Navigate to / to verify logging of the error.
📦 GraphQL Query
query GetEpisodes($page: Int) {
  episodes(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}
### 📄 Interfaces (interfaces/index.ts)
interface InfoProps {
  pages: number
  next: number
  prev: number
  count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>
🌐 API Reference
Data is fetched from:
https://rickandmortyapi.com/graphql
✨ Features
Dynamic episode listing

Pagination controls (Next/Previous)

Responsive card layout

Clean design with Tailwind CSS

Type-safe components with TypeScript

### ✅ Final Checklist
 ErrorBoundary implemented and used in _app.tsx

 ErrorProneComponent was created and used for testing

 Error monitoring service integrated (e.g., Sentry)

 Application runs with npm run dev

 All required files added and committed




### 🧠 Author
Festus Kimani
GitHub Profile

### 📝 License
This project is part of the ALX Frontend GraphQL Track. For educational purposes only.

