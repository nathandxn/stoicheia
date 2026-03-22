import './Navigation.css'

interface NavigationProps {
  currentIndex: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export default function Navigation({ currentIndex, totalPages, onPrev, onNext }: NavigationProps) {
  return (
    <nav className="navigation">
      <button
        className="nav-btn"
        onClick={onPrev}
        disabled={currentIndex === 0}
      >
        ← Previous
      </button>
      <span className="nav-position">
        {currentIndex + 1} / {totalPages}
      </span>
      <button
        className="nav-btn"
        onClick={onNext}
        disabled={currentIndex === totalPages - 1}
      >
        Next →
      </button>
    </nav>
  )
}
