import React from 'react'

function Skeleton() {
  return (
    <div className="card col-12 col-sm-6 col-md-4 m-2 p-2 gx-0 skeleton-card ">
    <div className="skeleton-img"></div>
    <div className="skeleton-text">
      <div className="skeleton-text-line"></div>
      <div className="skeleton-text-line"></div>
    </div>
  </div>
  )
}

export default Skeleton