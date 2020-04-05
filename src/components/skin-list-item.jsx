import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import SkinViewer from "./skin-viewer"
import useReferenceDimensions from "../utils/useReferenceDimensions"

const SkinListItem = ({ name, title, source, description }) => {
  const cardRef = useRef(null)
  const [isWalking, setIsWalking] = useState(false)
  const { width } = useReferenceDimensions(cardRef) || { width: 250 }
  const height = 250
  return (
    <div className="column is-3">
      <div className="card" ref={cardRef}>
        <div className="card-header">
          <h1 className="card-header-title">{title}</h1>
        </div>
        <div className="card-image">
          <SkinViewer
            source={source}
            height={height}
            width={width}
            isWalking={isWalking}
          />
        </div>
        <div className="card-content">
          <div className="content">
            <p className="subtitle">{description}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <button
              className="button is-inverted is-primary"
              onClick={() => setIsWalking(!isWalking)}
            >
              {isWalking ? "Zastaviť" : "Animovať"}
            </button>
          </div>
          <a className="card-footer-item is-primary" href={source} download>
            Stiahnuť
          </a>
        </div>
      </div>
    </div>
  )
}

SkinListItem.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SkinListItem
