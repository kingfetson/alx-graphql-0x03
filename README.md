# alx-graphql-0x02: Rick and Morty Episodes Viewer

A frontend React application built with Apollo Client and GraphQL to query episodes from the [Rick and Morty API](https://rickandmortyapi.com/). 
This project features pagination, responsive UI with Tailwind CSS, and modular components.

## 📚 Project Objectives

- Learn to query a GraphQL endpoint.
- Fetch and display paginated data (episodes).
- Build modular, reusable components in React.
- Apply TypeScript interfaces for strong typing.

---

## 🧰 Tech Stack

- **React** (with TypeScript)
- **Apollo Client** (GraphQL)
- **Tailwind CSS** (styling)
- **Next.js** (frontend framework)
- **Rick and Morty GraphQL API**

---

## 📁 Project Structure

alx-rick-and-morty-app/
├── components/
│ └── common/
│ └── EpisodeCard.tsx
├── interfaces/
│ └── index.ts
├── graphql/
│ └── queries.ts
├── pages/
│ └── index.tsx
├── styles/
│ └── globals.css
├── public/
└── ...

---

## 🚀 How to Run

### 1. Clone the repository

git clone https://github.com/your-username/alx-graphql-0x02.git
cd alx-graphql-0x02/alx-rick-and-morty-app
2. Install dependencies
npm install
3. Run the development server
npm run dev
Visit: http://localhost:3000

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
📄 Interfaces (interfaces/index.ts)
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



### 🧠 Author
Festus Kimani
GitHub Profile

### 📝 License
This project is part of the ALX Frontend GraphQL Track. For educational purposes only.

