import React, { useRef, useState, useEffect, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { SkinViewer, createOrbitControls, WalkingAnimation } from "skinview3d"

const SkinViewerElement = ({ source, width, height, isWalking }) => {
  const skinContainer = useRef(null)
  const [skinViewer, setSkinViewer] = useState(null)
  const [walkingAnimation, setWalkingAnimation] = useState(null)
  // create skin viewer when rendered first time, or when source is changed
  useLayoutEffect(() => {
    const domEl = skinContainer.current
    const sw = new SkinViewer({
      domElement: domEl,
      width,
      height,
      skinUrl: source,
    })
    sw.playerObject.rotateY(Math.PI / 4)

    const control = createOrbitControls(sw)
    control.enableRotate = true
    control.enableZoom = false
    control.enablePan = false
    setSkinViewer(sw)
    return () => {
      sw.dispose()
      setSkinViewer(null)
    }
  }, [source]) // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    if (!skinViewer) return
    if (!!walkingAnimation !== !!isWalking) {
      if (!walkingAnimation) {
        const walking = skinViewer.animations.add(WalkingAnimation)
        setWalkingAnimation(walking)
      } else {
        walkingAnimation.remove()
        setWalkingAnimation()
      }
    }
  }, [skinViewer, walkingAnimation, isWalking])

  // update size when width or height is changed
  useEffect(() => {
    if (!skinViewer) return
    skinViewer.setSize(width, height)
  }, [width, height]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        cursor: "grab",
        width,
        height,
        overflow: "hidden",
      }}
      ref={skinContainer}
    ></div>
  )
}

SkinViewerElement.propTypes = {
  source: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default SkinViewerElement
