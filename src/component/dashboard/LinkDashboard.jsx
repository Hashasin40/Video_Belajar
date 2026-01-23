import React from "react";
import { NavLink } from "react-router-dom";

function LinkDashboard({ to, className, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? "text-green-700 font-bold after:scale-x-100" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default LinkDashboard;
