import React, { useState, useEffect } from "react";

export default function EarthquakeListComponent() {
  const [earthquakeData, setEarthquakeData] = useState([]);

  useEffect(() => {
    fetch("https://reliefhelp.onrender.com/location/api/earthquake-data/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched earthquake data:", data);
        setEarthquakeData(data);
      })
      .catch((error) => {
        console.log("Error fetching earthquake data:", error);
        setEarthquakeData([]); // Set empty array in case of error
      });
  }, []);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    width: "100%",
    maxWidth: "70%",
    margin: "20px auto",
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
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    padding: "12px",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
  };

  const tableRowStyle = {
    borderBottom: "1px solid #ccc",
  };

  const tableCellStyle = {
    padding: "12px",
    borderBottom: "1px solid #ccc",
  };

  return (
    <div style={cardStyle}>
      <div style={cardContentStyle}>
        <div style={titleStyle}>Earthquake Data</div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Place</th>
              <th style={tableHeaderStyle}>Date</th>
              <th style={tableHeaderStyle}>Magnitude</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(earthquakeData) && earthquakeData.length > 0 ? (
              earthquakeData.map((quake, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td style={tableCellStyle}>{quake.place}</td>
                  <td style={tableCellStyle}>{quake.date}</td>
                  <td style={tableCellStyle}>{quake.magnitude}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={tableCellStyle}>
                  No earthquake data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}