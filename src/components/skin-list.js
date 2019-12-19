import React from "react"
import PropTypes from "prop-types"

const SkinList = ({ numCols = 4, children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 1fg)`,
      }}
    >
      {children}
    </div>
  )
}

SkinList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SkinList
