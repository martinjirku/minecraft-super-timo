import React from "react"
import PropTypes from "prop-types"

const SkinList = ({ children }) => {
  return (
    <div className="container">
      <div className="columns is-multiline is-8">{children}</div>
    </div>
  )
}

SkinList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SkinList
