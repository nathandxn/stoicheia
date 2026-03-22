import { useState } from 'react'
import Navigation from './components/Navigation'
import TableOfContents from './components/TableOfContents'
import Epigraph from './pages/Epigraph'
import IntroductionPage from './pages/IntroductionPage'
import './App.css'

const pages = [
  { title: 'Epigraph', component: Epigraph },
  { title: 'Introduction', component: IntroductionPage },
]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)

  const CurrentPage = pages[currentIndex].component

  return (
    <div className="app">
      <header className="app-header">
        <button className="toc-toggle" onClick={() => setTocOpen(true)}>
          ☰
        </button>
        <span className="app-title">Stoicheia</span>
      </header>

      <main className="app-content">
        <CurrentPage />
      </main>

      <Navigation
        currentIndex={currentIndex}
        totalPages={pages.length}
        onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
        onNext={() => setCurrentIndex((i) => Math.min(pages.length - 1, i + 1))}
      />

      <TableOfContents
        pages={pages}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
      />
    </div>
  )
}
