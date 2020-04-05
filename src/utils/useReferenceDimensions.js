import { useState, useEffect } from "react"

const IS_BROWSER = typeof window === "object"

export default function useReferenceDimensions(refEl) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (!IS_BROWSER) return false
    const handleResize = () => {
      const domEl = refEl.current
      setWidth(domEl.clientWidth)
      setHeight(domEl.clientHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [refEl])
  return {
    width,
    height,
  }
}
