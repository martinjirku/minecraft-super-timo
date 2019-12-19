import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { SkinViewer, createOrbitControls } from "skinview3d"

const SkinListItem = ({ name, title, source, description }) => {
  const skinContainer = useRef(null)
  useEffect(() => {
    const skinViewer = new SkinViewer({
      domElement: skinContainer.current,
      width: 200,
      height: 200,
      skinUrl: source,
    })
    const control = createOrbitControls(skinViewer)
    control.enableRotate = true
    control.enableZoom = true
    control.enablePan = false

    return () => {
      skinViewer.dispose()
    }
  }, [source])
  return (
    <div>
      <div ref={skinContainer}></div>
      <span>
        {title} - {name}.png - {source} - {description}
      </span>
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
