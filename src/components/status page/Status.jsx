import React, { useState, useEffect } from "react";
import LandingPageNav from "../landing page/navbar";
import { Link } from "react-router-dom";
import EarthquakeListComponent from "./EarthquakeListComponent";


export default function App() {
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [disastersData, setDisastersData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState(null);

  useEffect(() => {
    // Fetch the disasters data from the API
    fetch("https://reliefhelp.onrender.com/location/track-location/")
      .then((response) => response.json())
      .then((data) => {
        // Check if data is an array or a single object
        if (Array.isArray(data)) {
          setDisastersData(data);
        } else {
          // If it's a single object, wrap it in an array before setting the state
          setDisastersData([data]);
        }
      })
      .catch((error) => {
        console.log("Error fetching disasters data:", error);
      });

    // Fetch the weather data from the API
    fetch("https://reliefhelp.onrender.com/location/api/user_weather_location/")
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.weather_data);
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });

    // Fetch the earthquake data from the API
    fetch("https://reliefhelp.onrender.com/location/api/earthquake-data_specific/")
      .then((response) => response.json())
      .then((data) => {
        setEarthquakeData(data);
      })
      .catch((error) => {
        console.log("Error fetching earthquake data:", error);
      });
  }, []);

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
          {showSecondComponent && (
            <>
              <SecondComponent disastersData={disastersData} />
              <WeatherComponent weatherData={weatherData} />
              <EarthquakeComponent earthquakeData={earthquakeData} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
function FirstComponent({ onCheckStatusClick }) {
  const cardStyle = {
    borderRadius: "4px",
    padding: "16px",
    width: "70%",
    margin: "0 auto",
    transition: "transform 0.5s",
    transform: "translateY(0)",
  };

  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cardDescriptionStyle = {
    marginBottom: "20px",
    textAlign: "center",
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

function SecondComponent({ disastersData }) {
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
    <>
      <div style={cardStyle}>
        <Link
          to="/"
          className="goback-btn"
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
        <div style={cardContentStyle}>
          <div style={titleStyle}>Disaster Probability Details</div>
          <table className="table-data" style={tableStyle}>
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
              {disastersData.map((disaster, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td style={tableCellStyle}>{disaster.country}</td>
                  <td style={tableCellStyle}>{disaster.region}</td>
                  <td style={tableCellStyle}>{disaster.regionName}</td>
                  <td style={tableCellStyle}>{disaster.city}</td>
                  <td style={tableCellStyle}>{disaster.timezone}</td>
                  <td style={tableCellStyle}>{disaster.isp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
function WeatherComponent({ weatherData }) {
  if (!weatherData) {
    return null; // Return null or a loading indicator while waiting for data
  }

  return (
    <div style={cardStyle}>
      <div style={cardContentStyle}>
        <div style={titleStyle}>Weather Information</div>
        <table className="table-data" style={tableStyle}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={tableHeadStyle}>Location</th>
              <th style={tableHeadStyle}>Weather State</th>
              <th style={tableHeadStyle}>Description</th>
              <th style={tableHeadStyle}>Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={tableCellStyle}>{weatherData.name}</td>
              <td style={tableCellStyle}>
                {weatherData.weather_state[0].main}
              </td>
              <td style={tableCellStyle}>
                {weatherData.weather_state[0].description}
              </td>
              <td style={tableCellStyle}>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather_state[0].icon}.png`}
                  alt="weather icon"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styles for WeatherComponent
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

function EarthquakeComponent({ earthquakeData }) {
  if (!earthquakeData) {
    return null; // Return null or a loading indicator while waiting for data
  }

  const { location, earthquake_data } = earthquakeData;

  // Styles for EarthquakeComponent
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

  return (
    <>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <div style={titleStyle}>Earthquake Information</div>
          <table className="table-data" style={tableStyle}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={tableHeadStyle}>Location</th>
                <th style={tableHeadStyle}>Status</th>
                <th style={tableHeadStyle}>Country</th>
                <th style={tableHeadStyle}>Region</th>
                <th style={tableHeadStyle}>Region Name</th>
                <th style={tableHeadStyle}>City</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableRowStyle}>
                <td style={tableCellStyle}>
                  {location ? "Success" : "Failure"}
                </td>
                <td style={tableCellStyle}>
                  {location ? location.status : "N/A"}
                </td>
                <td style={tableCellStyle}>
                  {location ? location.country : "N/A"}
                </td>
                <td style={tableCellStyle}>
                  {location ? location.region : "N/A"}
                </td>
                <td style={tableCellStyle}>
                  {location ? location.regionName : "N/A"}
                </td>
                <td style={tableCellStyle}>
                  {location ? location.city : "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <EarthquakeListComponent /> {/* Include the new component here */}
    </>
  );
}

