import { useState, useEffect, useRef } from "react"

export default function useReferenceDimensions(refEl) {
  const isBrowser = typeof window === "object"
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (!isBrowser) return false
    const handleResize = () => {
      const domEl = refEl.current
      setWidth(domEl.clientWidth)
      setHeight(domEl.clientHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return {
    width,
    height,
  }
}
