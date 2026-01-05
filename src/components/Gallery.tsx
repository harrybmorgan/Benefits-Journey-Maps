import { useState } from 'react'
import type { Artifact } from '../types'

type GalleryProps = {
  artifacts: Artifact[]
  label?: string
}

export function Gallery({ artifacts, label }: GalleryProps) {
  const [index, setIndex] = useState(0)

  if (!artifacts.length) return null

  const current = artifacts[index]
  const hasPrev = index > 0
  const hasNext = index < artifacts.length - 1

  return (
    <div className="gallery" aria-label={label ?? 'Artifact gallery'}>
      <figure className="gallery-figure">
        <img src={current.thumbnail} alt={current.alt} />
        {artifacts.length > 1 ? (
          <div className="gallery-controls" aria-hidden>
            <button
              className="ghost-btn"
              disabled={!hasPrev}
              onClick={() => hasPrev && setIndex((i) => i - 1)}
            >
              ‹ Prev
            </button>
            <button
              className="ghost-btn"
              disabled={!hasNext}
              onClick={() => hasNext && setIndex((i) => i + 1)}
            >
              Next ›
            </button>
          </div>
        ) : null}
      </figure>
      <figcaption className="gallery-caption">
        {current.label} {artifacts.length > 1 ? `(${index + 1}/${artifacts.length})` : ''}
      </figcaption>
    </div>
  )
}

export default Gallery

