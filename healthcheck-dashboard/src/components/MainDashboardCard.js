import React from "react";
import "./MainDashboardCard.css";
export const MainDashboardCard = ({
  title,
  background,
  frontendStatus,
  backendStatus,
  href,
  onClick
}) => {
  return (
    <div class="card" style={(background = { background })}>
      <a href={href} onClick={onClick} class="title">
        <h1>{title}</h1>
      </a>
      <p class="status">
        {`Frontend: ${frontendStatus}\u2003|\u2003Backend: ${backendStatus}`}
      </p>
    </div>
  );
};
