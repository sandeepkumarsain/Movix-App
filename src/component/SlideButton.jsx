import React, { useState } from "react";

const SlideButton = ({ title }) => {
  const [activeView, setActiveView] = useState("Day");

  const handleToggle = (view) => {
    setActiveView(view);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4">
      <h1 className="text-light">{title}</h1>
      <div className="slidebutton">
        <button
          className={`btn ${activeView === "Day" ? "active" : ""}`}
          onClick={() => handleToggle("Day")}
        >
          Day
        </button>
        <button
          className={`btn ${activeView === "Week" ? "active" : ""}`}
          onClick={() => handleToggle("Week")}
        >
          Week
        </button>
      </div>
    </div>
  );
};

export default SlideButton;