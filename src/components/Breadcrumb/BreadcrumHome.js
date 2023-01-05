import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./br.scss";
function BreadcrumbHome() {
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
        Home &gt;
      </Link>
    </div>
  );
}

export default BreadcrumbHome;
