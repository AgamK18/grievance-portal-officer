import React from 'react';
import { setLogout } from '../state';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.id);

    const handleLogout = () => {
        dispatch(
            setLogout()
        );
        navigate('/');
    }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" onClick={() => navigate(`/officer/${id}/`)}>Portal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto ">
                    <li class="nav-item" onClick={() => navigate(`/officer/${id}/`)}>
                        <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item" onClick={() => navigate(`/officer/${id}/solve/`)}>
                        <a class="nav-link mx-2" href="#">Solve Grievance</a>
                    </li>
                    <li class="nav-item" onClick={() => navigate(`/officer/${id}/all/`)}>
                        <a class="nav-link mx-2" href="#">View All</a>
                    </li>
                    <li class="nav-item" onClick={handleLogout}>
                        <a class="nav-link mx-2" href="#">Logout</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
