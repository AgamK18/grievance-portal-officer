import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [officer, setOfficer] = useState(null);
  const token = useSelector((state) => state.token);

  const { id } = useParams();

  const getOfficer = async () => {
    const response = await fetch(`http://localhost:3001/officer/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data);
    setOfficer(data);
  };

  useEffect(() => {
    getOfficer();
  }, []);

  if (!officer) return null;

  return (
    <div>
      <Navbar />
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                class="rounded-circle img-fluid"
                style={{ width: 150 + "px" }}
              />
              <h5 class="my-3">
                {officer.firstName} {officer.lastName}
              </h5>
              <p class="text-muted mb-1">{officer.designation}</p>
              <p class="text-muted mb-4">
                {officer.district} {officer.state}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">{officer.id}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">First Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.firstName}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Last Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.lastName}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.email}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.phone}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {officer.ditrict} {officer.state}
                  </p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Aadhar Number</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.adhaar}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Department</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.department}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Designation</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{officer.designation}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
