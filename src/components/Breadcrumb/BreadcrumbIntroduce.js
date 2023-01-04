import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./br.scss";
function BreadcrumbIntroduce() {
  const location = useLocation();

  return (
    <div>
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
        to="/introduce"
        className={
          location.pathname.startsWith("/introduce")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Introduce
      </Link>
    </div>
  );
}

export default BreadcrumbIntroduce;
