import React from "react";
import "./TrackAdmin.css";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Track() {
  const [department, setOfficer] = useState("Electricity");
  const handleOfficer = (e) => {
    setOfficer(e.target.svalue);
  };
  const data = [
    { firstName: "George", lastName: "Smith", job: "writer", salary: 50000 },
    { firstName: "Michael", lastName: "Handler", job: "DJ", salary: 150000 },
    { firstName: "Larry", lastName: "David", job: "writer", salary: 250000 },
    { firstName: "Mindy", lastName: "Smith", job: "cook", salary: 120000 },
  ];
  let length = data.length;
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
                    />
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-info btn-md btn-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="container my-5">
        <section class="text-center dark-grey-text mb-5">
          <div class="card">
            <div class="card-body rounded-top border-top p-5">
              <h3 class="font-weight-bold my-4">Complaint Info</h3>

              <div class="ag-courses_item">
                <div class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  {/* <div class="ag-courses-item_title">
                        UI/Web&amp;Graph design for teenagers 11-17&#160;years
                        old
                      </div> */}

                  <div class="ag-courses-item_date-box">
                    Department:
                    <span class="ag-courses-item_date">Water</span>
                  </div>
                  <div class="ag-courses-item_date-box">
                    Created At:
                    <span class="ag-courses-item_date">04.11.2022</span>
                  </div>
                  <div class="ag-courses-item_date-box">
                    Subject :
                    <span class="ag-courses-item_date">hhjcdsbnibi</span>
                  </div>
                </div>
              </div>
              <hr />
              <h4 class="font-weight-bold text-left my-4">Update Status</h4>
              <div class="container my-5">
                <section class="text-center dark-grey-text mb-5">
                  <div class="card">
                    <br />
                    <div class="my-5">
                      <center>Mark As Solved</center>
                    </div>
                    <br />

                    <input type="checkbox" id="_checkbox" />
                    <label class="track" for="_checkbox">
                      <div id="tick_mark"></div>
                    </label>
                  </div>
                </section>
              </div>

              <br />
              <div class="container my-5">
                <section class="text-center dark-grey-text mb-5">
                  <div class="card">
                    <center>
                      <div class="my-5">
                        <center>Forward To Another Officer</center>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="btn-group ">
                          <Form.Select
                            label="Forward to"
                            style={{ background: "#000000", color: "#ffffff" }}
                            onChange={handleOfficer}
                          >
                            <option style={{ color: "#ffffff" }}>
                              Forward To
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Electricity"
                            >
                              Electricity
                            </option>
                            <option style={{ color: "#ffffff" }} value="Water">
                              Water
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Education"
                            >
                              Education
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Public Transport"
                            >
                              Public Transport
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Healthcare"
                            >
                              Healthcare
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Infrastructure"
                            >
                              Infrastructure
                            </option>
                            <option
                              style={{ color: "#ffffff" }}
                              value="Inflation"
                            >
                              Inflation
                            </option>
                            <option style={{ color: "#ffffff" }} value="Others">
                              Education
                            </option>
                          </Form.Select>
                        </div>
                      </div>
                    </center>
                  </div>
                </section>
              </div>

              <br></br>
            </div>
            <div class="text-center my-3">
              <button type="submit" class="btn btn-info btn-md btn-dark">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
