import React, { useState } from "react";
import { UserIcon } from "../icons";
import "./sidebar.css"

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={
        isSidebarOpen ? { ...sidebarStyle, ...openSidebarStyle } : sidebarStyle
      }
    >
      <div style={sidebarHeaderStyle}>
        <div style={companyLogoStyle}>Nyuydine Bill</div>
        <div style={notificationButtonStyle}>{/* Notification button */}</div>
      </div>
      <div style={sidebarMenuStyle}>
        <div style={menuItemStyle}>User Details</div>
        <div style={menuItemStyle}>Location</div>
        <div style={menuItemStyle}>Modify Details</div>
      </div>
      <div style={upgradeCardStyle}>
        <div style={cardTitleStyle}>Upgrade to Pro</div>
        <div style={cardDescriptionStyle}>
          Unlock all features and get unlimited access to our support team
        </div>
        <div style={cardButtonStyle}>{/* Upgrade button */}</div>
      </div>
      {/* Use the UserIcon component to toggle the sidebar */}
      <div style={toggleButtonStyle} onClick={toggleSidebar}>
        <UserIcon />
      </div>
    </div>
  );
}

const sidebarStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: "-100%", // Initial position off-screen
  width: "250px", // Initial width
  maxWidth: "100%", // Adjusted for mobile devices
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "20px",
  transition: "left 0.3s ease", // Add transition for smooth animation
};

const toggleButtonStyle = {
  position: "fixed",
  bottom: "20px",
  left: "20px",
  padding: "10px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
};

const openSidebarStyle = {
  left: 0, // Move sidebar into view
};

const sidebarHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  marginTop: "80px", // Adjust as needed
};

const companyLogoStyle = {
  fontWeight: "bold",
};

const notificationButtonStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

const sidebarMenuStyle = {
  marginBottom: "20px",
};

const menuItemStyle = {
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: "10px",
  cursor: "pointer",
};

const upgradeCardStyle = {
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

const cardTitleStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
};

const cardDescriptionStyle = {
  marginBottom: "10px",
};

const cardButtonStyle = {
  marginTop: "auto",
};
