import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { SkinViewer, createOrbitControls } from "skinview3d"

const SkinListItem = ({ name, title, source, description }) => {
  const skinContainer = useRef(null)
  useEffect(() => {
    const domEl = skinContainer.current
    const skinViewer = new SkinViewer({
      domElement: domEl,
      width: domEl.clientWidth,
      height: domEl.clientHeight,
      skinUrl: source,
    })
    const control = createOrbitControls(skinViewer)
    control.enableRotate = true
    control.enableZoom = true
    control.enablePan = false

    const resizeSkinViewer = () => {
      skinViewer.setSize(domEl.clientWidth, domEl.clientHeight)
    }
    window.addEventListener("resize", resizeSkinViewer)

    return () => {
      skinViewer.dispose()
      window.removeEventListener("resize", resizeSkinViewer)
    }
  }, [source])
  return (
    <div>
      <div
        style={{
          cursor: "crosshair",
          overflow: "hidden",
        }}
        ref={skinContainer}
      ></div>
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
