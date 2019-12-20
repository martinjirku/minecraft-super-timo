import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import SkinViewer from "./skin-viewer"
import useReferenceDimensions from "../utils/useReferenceDimensions"

const SkinListItem = ({ name, title, source, description }) => {
  const viewerContainerRef = useRef(null)
  const textRef = useRef(null)
  const { width } = useReferenceDimensions(viewerContainerRef)
  const { height } = useReferenceDimensions(textRef)
  return (
    <div>
      <div ref={viewerContainerRef}>
        <SkinViewer source={source} width={width} height={height} />
      </div>
      <div ref={textRef}>
        <span>
          {title} - {name}.png - {source} - {description}
        </span>
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
