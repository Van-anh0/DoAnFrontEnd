import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./br.scss";
function BreadcrumbsShowTime() {
  const location = useLocation();

  return (
    <div className="bg_bc">
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/showtime"
        className={
          location.pathname.startsWith("/showtime")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Showtime
      </Link>
    </div>
  );
}

export default BreadcrumbsShowTime;
