import React, { useState } from 'react';
import LandingPageNav from '../landing page/navbar';
import { Link } from 'react-router-dom';

export default function App() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleCheckStatusClick = () => {
    setShowSecondComponent(true);
  };

  return (
    <>
    <LandingPageNav />
      <div className="app-container">
        <FirstComponent onCheckStatusClick={handleCheckStatusClick} />
        <div
          className={`second-component ${showSecondComponent ? "active" : ""}`}
        >
          {showSecondComponent && <SecondComponent />}
        </div>
      </div>
    </>
  );
}

function FirstComponent({ onCheckStatusClick }) {
  const cardStyle = {
    borderRadius: '4px',
    padding: '16px',
    width: '70%',
    margin: '0 auto',
    transition: 'transform 0.5s',
    transform: 'translateY(0)',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const cardDescriptionStyle = {
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div className="first-component" style={cardStyle}>
      <div style={cardContentStyle}>
        <div style={cardTitleStyle}>Disaster Status</div>
        <div style={cardDescriptionStyle}>
          Click the button below to check the status of disasters in your area.
        </div>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
          }}
          onClick={onCheckStatusClick}
        >
          Check Status
        </button>
      </div>
    </div>
  );
}
function SecondComponent() {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    width: "100%",
    maxWidth: "70%",
    margin: "0 auto",
  };

  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const tableStyle = {
    width: "100%",
    marginBottom: "20px",
    borderCollapse: "collapse",
  };

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    
  };

  const tableRowStyle = {
    borderBottom: "1px solid #ccc",
  };

  const tableHeadStyle = {
    padding: "12px",
    fontWeight: "bold",
  };

  const tableCellStyle = {
    padding: "12px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={cardStyle}>
      <div style={cardContentStyle}>
        <div style={titleStyle}>
          Disaster Probability Details
        </div>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={tableHeadStyle}>Disaster Type</th>
              <th style={tableHeadStyle}>Probability</th>
              <th style={tableHeadStyle}>Location</th>
              <th style={tableHeadStyle}>Severity</th>
              <th style={tableHeadStyle}>Reported By</th>
              <th style={tableHeadStyle}>Reported At</th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>Tornado</td>
              <td style={tableCellStyle}>High</td>
              <td style={tableCellStyle}>Oakland, CA</td>
              <td style={tableCellStyle}>High</td>
              <td style={tableCellStyle}>Local Authorities</td>
              <td style={tableCellStyle}>February 8, 2024</td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>Flood</td>
              <td style={tableCellStyle}>Medium</td>
              <td style={tableCellStyle}>Houston, TX</td>
              <td style={tableCellStyle}>Moderate</td>
              <td style={tableCellStyle}>Weather Department</td>
              <td style={tableCellStyle}>February 8, 2024</td>
            </tr>
          </tbody>
        </table>
        <Link to="/"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
          }}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}