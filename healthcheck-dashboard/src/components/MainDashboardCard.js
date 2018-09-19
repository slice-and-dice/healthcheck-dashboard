import React from "react";
import "./MainDashboardCard.css";
export const MainDashboardCard = ({ title, background }) => {
  return (
    <div class="card" style={(background = { background })}>
      <h1 class="title">{title}</h1>
    </div>
  );
};
