import './TableOfContents.css'

interface TableOfContentsProps {
  pages: { title: string }[]
  currentIndex: number
  onSelect: (index: number) => void
  isOpen: boolean
  onClose: () => void
}

export default function TableOfContents({ pages, currentIndex, onSelect, isOpen, onClose }: TableOfContentsProps) {
  if (!isOpen) return null

  return (
    <div className="toc-overlay" onClick={onClose}>
      <div className="toc-panel" onClick={(e) => e.stopPropagation()}>
        <div className="toc-header">
          <h2>Table of Contents</h2>
          <button className="toc-close" onClick={onClose}>×</button>
        </div>
        <ul className="toc-list">
          {pages.map((page, i) => (
            <li key={i}>
              <button
                className={`toc-item ${i === currentIndex ? 'toc-item--active' : ''}`}
                onClick={() => { onSelect(i); onClose() }}
              >
                {page.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
