import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./br.scss";
function BreadcrumbCinema() {
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
        to="/cinema"
        className={
          location.pathname.startsWith("/cinema")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Cinema
      </Link>
    </div>
  );
}

export default BreadcrumbCinema;
