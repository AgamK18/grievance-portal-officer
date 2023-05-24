import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Portal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link mx-2 active" aria-current="page">
                  <Link className=" nav-link" to="/">
                    Home
                  </Link>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link mx-2">
                  <Link className=" nav-link" to="/Admin/TrackGrievance">
                    Resolve Grievance
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2">
                  <Link className=" nav-link" to="/Admin/ViewAll">
                    View All
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2">
                  <Link className=" nav-link" to="/">
                    Logout
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
