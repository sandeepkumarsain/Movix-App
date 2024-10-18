import React from "react";

const CircleRating = ({ rating, className, fillColor = "#fff" }) => {
  const percentage = (rating / 10) * 100;
  const color = rating < 5 ? "#dc3545" : rating < 7 ? "#ffc107" : "#28a745";

  return (
    <div
      className={`circle-rating ${className}`}
      style={{ position: "relative", width: "100px", height: "100px" }}
    >
      <svg
        viewBox="0 0 36 36"
        className="circular-chart"
        style={{ transform: "rotate(-90deg)" }}
      >
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          strokeWidth="3.8"
        />
        <path
          className="circle"
          stroke={color}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="3.8"
          style={{ transition: "stroke-dasharray 0.6s ease 0s" }}
        />
      </svg>
      <div
        className="rating-text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: fillColor,
        }}
      >
        {rating}
      </div>
    </div>
  );
};

export default CircleRating;
