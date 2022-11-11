import React from 'react'

function StatisticsCard({ Country, TotalConfirmed, TotalDeaths, TotalRecovered }) {
  return (
<div className="card_container">
      {Country && (
        <div className="card">
          <span>Country</span>
          <span>{Country}</span>
        </div>
      )}

      <div className="card">
        <span>TotalConfirmed</span>
        <span>{TotalConfirmed}</span>
      </div>

      <div className="card">
        <span>TotalDeaths</span>
        <span>{TotalDeaths}</span>
      </div>

      <div className="card">
        <span>TotalRecovered</span>
        <span>{TotalRecovered}</span>
      </div>
    </div>
  )
}

export default StatisticsCard