import React, { useState, useEffect } from "react"

import DashboardCard from "./DashboardCard"
import "./dashboard.css"


import { dashboardData } from "../../dummydata"


const Dashboard = () => {
  const [data, setData] = useState(dashboardData)

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        incomingMessages: {
          pending: Math.max(0, prevData.incomingMessages.pending + Math.floor(Math.random() * 5) - 2),
          error: Math.max(0, prevData.incomingMessages.error + Math.floor(Math.random() * 3) - 1),
          processed: Math.max(0, prevData.incomingMessages.processed + Math.floor(Math.random() * 7) - 3)
        },
        outgoingMessages: {
          transformed: Math.max(0, prevData.outgoingMessages.transformed + Math.floor(Math.random() * 5) - 2),
          error: Math.max(0, prevData.outgoingMessages.error + Math.floor(Math.random() * 3) - 1),
          delivered: Math.max(0, prevData.outgoingMessages.delivered + Math.floor(Math.random() * 7) - 3)
        }
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>DASHBOARD</h1>
        <p>REAL-TIME OVERVIEW OF YOUR MESSAGING SYSTEM</p>
      </header>
      <main className="dashboard-main">
        <section className="message-status">
          <h2>Incoming Messages</h2>
          <div className="status-cards">
            <DashboardCard title="Pending" count={data.incomingMessages.pending} icon="hourglass" color="#ffa500" />
            <DashboardCard title="Error" count={data.incomingMessages.error} icon="exclamation-circle" color="#ff0000" />
            <DashboardCard title="Processed" count={data.incomingMessages.processed} icon="check-circle" color="#00ff00" />
          </div>
        </section>
        <section className="message-status">
          <h2>Outgoing Messages</h2>
          <div className="status-cards">
            <DashboardCard title="Transformed" count={data.outgoingMessages.transformed} icon="random" color="#1e90ff" />
            <DashboardCard title="Error" count={data.outgoingMessages.error} icon="exclamation-triangle" color="#ff4500" />
            <DashboardCard title="Delivered" count={data.outgoingMessages.delivered} icon="paper-plane" color="#32cd32" />
          </div>
        </section>
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            {data.recentActivity.map((activity, index) => (
              <li key={index} className={`activity-item ${activity.type}`}>
                <i className={`fas fa-${getActivityIcon(activity.type)}`}></i>
                <span>{activity.message}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
 


  )
}

function getActivityIcon(type) {
  switch (type) {
    case 'processed': return 'check-circle';
    case 'error': return 'exclamation-circle';
    case 'transformed': return 'random';
    case 'delivered': return 'paper-plane';
    case 'pending': return 'hourglass';
    default: return 'info-circle';
  }
}

export default Dashboard