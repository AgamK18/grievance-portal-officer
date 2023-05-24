import React from "react";
import "./Track.css";
import Navbar from './Navbar'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Track() {

  const navigate = useNavigate();
  const [complaint, setComplaint] = useState('');
  const [complaintId, setComplaintId] = useState('');
  const [solvedStatus, setSolvedStatus] = useState('');
  const [forward, setForward] = useState('');
  const [forwardDistrict, setForwardDistrict] = useState('');
  const [forwardState, setForwardState] = useState('');

  const [data, setData] = useState([]);
  const { id } = useParams();
  const token = useSelector((state) => state.token);

  let length = data.length;

  const getComplaint = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/users/trackComplaint/${complaintId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const res = await response.json();
    setComplaint(res);
    setData(res.history);
  };

  const updateComplaint = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/officer/${id}/solveComplaint`, {
      method: "PATCH",
      headers: { 
        Authorization: `Bearer ${token}` ,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: complaintId,
        status: (solvedStatus==="True") ? true : false,
        forwardTo: forward,
        state: forwardState,
        district: forwardDistrict
      })
    });
    const res = await response.json();
    console.log(res);
    navigate(`/officer/${id}/all`);
  }

  return (
    <div>
      <Navbar />
      <div class="container my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Resolve Grievance</h3>

              <form class="mb-4 mx-md-5" action="">
                <div class="row">
                  <div class="col-md-12 mb-4">
                    <input
                      type="text"
                      id="subject"
                      class="form-control"
                      placeholder="Complaint ID"
                      value={complaintId} 
                      onChange={(e)=>{setComplaintId(e.target.value)}}
                    />
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-info btn-md btn-dark" onClick={getComplaint}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {complaint && <div class="container my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Complaint Info</h3>
                  <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>
                      <div class="ag-courses-item_date-box">
                        Department: 
                        <span class="ag-courses-item_date">{complaint.department}</span>
                      </div>
                      <div class="ag-courses-item_date-box">
                        Created At: 
                        <span class="ag-courses-item_date">{complaint.createdAt.slice(0, 10)}</span>
                      </div>
                      <div class="ag-courses-item_date-box">
                        Subject :
                        <span class="ag-courses-item_date">{complaint.description}</span>
                      </div>
                    </div>
                  </div>
              <br></br>

              <div class="row">
                <div class="col-md-12 mb-4">
                    <input type="text" id="subject" class="form-control" placeholder="Solved" value={solvedStatus} onChange={(e)=>{setSolvedStatus(e.target.value)}}/>
                </div>
                <div class="col-md-12 mb-4">
                    <input type="text" id="subject" class="form-control" placeholder="Designation" value={forward} onChange={(e)=>{setForward(e.target.value)}}/>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="text" id="subject" class="form-control" placeholder="District" value={forwardDistrict} onChange={(e)=>{setForwardDistrict(e.target.value)}}/>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="text" id="subject" class="form-control" placeholder="State" value={forwardState} onChange={(e)=>{setForwardState(e.target.value)}}/>
                </div>
              </div>
              
              <div class="text-center">
                <button type="submit" class="btn btn-info btn-md btn-dark" onClick={updateComplaint}>Update Status</button>
              </div>

            </div>
          </div>
        </section>
      </div>}
    </div>
  );
}
