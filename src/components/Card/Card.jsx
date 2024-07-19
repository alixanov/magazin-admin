import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div className='card'>
      <div className="admin-panel">
        <Link to={"/addformproduct"}>
          admin</Link>
      </div>
      <div className="report">
        <Link to={"/report"}>
        report
        </Link>      </div>
    </div>
  )
}

export default Card
