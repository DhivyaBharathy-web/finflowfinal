import React from "react"

const DashboardCard = ({ title, count, icon, color }) => {
  return (
    <div className="dashboard-card" style={{ borderColor: color }}>
      <div className="card-icon" style={{ backgroundColor: color }}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${count}%`, backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard