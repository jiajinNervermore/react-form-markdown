import React from 'react'
function IconButton  (params)  {
  let icon = params.icon
  
  return (
    <button className="button is-small" onClick={params.onClick}>
      <span className="icon is-small">
        <i className={"iconfont " + icon}></i>
      </span>
    </button>
  )
}
export default IconButton