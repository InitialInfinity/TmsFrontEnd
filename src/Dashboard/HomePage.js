import React, { useState, useEffect } from "react";
import "../assets1/css/style.css";
import "../assets1/plugins/morris/morris.css";
import "../assets1/css/font-awesome.min.css";
import "../assets1/css/line-awesome.min.css";
import { NavLink } from "react-bootstrap";

const HomePage = () => {
  const [roleId, setRoleId] = useState("");
  
  useEffect(() => {
    const storedRoleId = localStorage.getItem("RoleId");
    if (storedRoleId) {
      setRoleId(storedRoleId);
    
    }
    console.log("roleId", roleId);
   
  }, [roleId]);

  return (
    <div className="content container-fluid">
      {/* <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Welcome Admin!</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div> */}

      {/* Clients and Recent Projects Tables */}
      <div className="row">
        {/* Clients Table */}
        {/* <TableCard title="Clients" tableId="client-table" /> */}
        {/* Recent Projects Table */}
        {/* <TableCard title="Recent Projects" tableId="project-table" /> */}
      </div>

      {roleId === "6504BCFE-CF2F-44E6-ADD2-85651E13EBE1" ? (
        <>
          <div className="user-section">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12 mt-5">
                  <h3 className="page-title text-dark">User</h3>
                  {/* <ul className="breadcrumb">
                           <li className="breadcrumb-item active">User</li>
                       </ul> */}
                </div>
              </div>
            </div>
            {/* Project, Clients, Tasks, and Employees Widgets */}
            <div className="row">
              {/* Project Widget */}
              <Widget
                icon="fa fa-cubes"
                value="-"
                label="Attended Training"
              />
              {/* Clients Widget */}
              <Widget icon="fa fa-usd" value="-" label="Not Attend Training" />
              {/* Tasks Widget */}
              <Widget icon="fa fa-diamond" value="-" label="Passes Training" />
              {/* Employees Widget */}
              <Widget icon="fa fa-user" value="-" label="Failed Training" />
              <Widget1 icon="fa fa-diamond" value="-" label="Need Training" />
              {/* Employees Widget */}
              <Widget1
                icon="fa fa-user"
                value="-"
                label="Scheduled Training"
              />
            </div>

            {/* Total Revenue and Sales Overview Cards */}
            <div className="row">
              {/* Total Revenue Card */}
              <DashboardCard
                title="Total Attended Training"
                chartId="bar-charts"
              />

              {/* Sales Overview Card */}
              <DashboardCard
                title="Total Scheduled Training"
                chartId="line-charts"
              />
            </div>
          </div>
        </>
      ) : roleId === "ED90063A-8C7F-48D0-8E78-CB411AC26C28" ? (
        <>
          <div className="hr-section">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <h3 className="page-title text-dark">HR</h3>
                  {/* <ul className="breadcrumb">
                        <li className="breadcrumb-item active">User</li>
                    </ul> */}
                </div>
              </div>
            </div>

            {/* Statistics, Task Statistics, and Today Absent Sections */}
            <div className="row">
              {/* Statistics Section */}
              <StatisticsSection />
              {/* Task Statistics Section */}
              <TaskStatisticsSection />
              {/* Today Absent Section */}
              {/* <TodayAbsentSection /> */}
            </div>

            {/* Invoices and Payments Tables */}
            <div className="row">
              {/* Invoices Table */}
              {/* <TableCard title="Invoices" tableId="invoice-table" /> */}
              {/* Payments Table */}
              {/* <TableCard title="Payments" tableId="payment-table" /> */}
            </div>
          </div>
        </>
      ) : roleId === "44E0B6F7-52B8-4DF5-9B0E-9F87F486298B" ? (
        <>
          <div className="hod-section">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12 mt-5">
                  <h3 className="page-title text-dark">HOD</h3>
                  {/* <ul className="breadcrumb">
                        <li className="breadcrumb-item active">User</li>
                    </ul> */}
                </div>
              </div>
            </div>

            <div className="row">
              {/* New Employees Card */}
              <DashboardInfoCard
                title="Training Attended"
                value="-"
                progress="-"
              />
              {/* Earnings Card */}
              <DashboardInfoCard
                title="Training Not Attended"
                value="-"
                progress="-"
                previousValue="-"
              />
              {/* Expenses Card */}
              <DashboardInfoCard
                title="Dept Wise Training Passed"
                value="-"
                progress="-"
                previousValue="-"
              />
              {/* Profit Card */}
              <DashboardInfoCard
                title="Dept Wise Training Failed"
                value="-"
                progress="-"
                previousValue="-"
              />

              <DashboardInfoCard
                title="Employee Wise Training Passed"
                value="-"
                progress="-"
                previousValue="-"
              />
              <DashboardInfoCard
                title="Employee Wise Training Failed"
                value="-"
                progress="-"
                previousValue="-"
              />
              <DashboardInfoCard
                title="Dept Wise Pending Approval"
                value="-"
                progress="-"
                previousValue="-"
              />
              <DashboardInfoCard
                title="User Wise Pending Approval"
                value="-"
                progress="-"
                previousValue="-"
              />
              <DashboardInfoCard
                title="Dept Wise Training Approved"
                value="-"
                progress="-"
                previousValue="-"
              />
              <DashboardInfoCard
                title="User Wise Training Approved"
                value="-"
                progress="-"
                previousValue="-"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="content container-fluid">
            <div className="user-section">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12 mt-5">
                    <h3 className="page-title text-dark">User</h3>
                    {/* <ul className="breadcrumb">
                      <li className="breadcrumb-item active">User</li>
                  </ul> */}
                  </div>
                </div>
              </div>
              {/* Project, Clients, Tasks, and Employees Widgets */}
              <div className="row">
                {/* Project Widget */}
                <Widget
                  icon="fa fa-cubes"
                  value="-"
                  label="Attended Training"
                />
                {/* Clients Widget */}
                <Widget
                  icon="fa fa-usd"
                  value="-"
                  label="Not Attend Training"
                />
                {/* Tasks Widget */}
                <Widget
                  icon="fa fa-diamond"
                  value="-"
                  label="Passes Training"
                />
                {/* Employees Widget */}
                <Widget icon="fa fa-user" value="-" label="Failed Training" />
                <Widget1
                  icon="fa fa-diamond"
                  value="-"
                  label="Need Training"
                />
                {/* Employees Widget */}
                <Widget1
                  icon="fa fa-user"
                  value="-"
                  label="Scheduled Training"
                />
              </div>

              {/* Total Revenue and Sales Overview Cards */}
              <div className="row">
                {/* Total Revenue Card */}
                <DashboardCard
                  title="Total Attended Training"
                  chartId="bar-charts"
                />

                {/* Sales Overview Card */}
                <DashboardCard
                  title="Total Scheduled Training"
                  chartId="line-charts"
                />
              </div>
            </div>
            <div className="hod-section">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12 mt-5">
                    <h3 className="page-title text-dark">HOD</h3>
                    {/* <ul className="breadcrumb">
                            <li className="breadcrumb-item active">User</li>
                        </ul> */}
                  </div>
                </div>
              </div>

              <div className="row">
                {/* New Employees Card */}
                <DashboardInfoCard
                  title="Training Attended"
                  value="-"
                  progress="-"
                />
                {/* Earnings Card */}
                <DashboardInfoCard
                  title="Training Not Attended"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                {/* Expenses Card */}
                <DashboardInfoCard
                  title="Dept Wise Training Passed"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                {/* Profit Card */}
                <DashboardInfoCard
                  title="Dept Wise Training Failed"
                  value="-"
                  progress="-"
                  previousValue="-"
                />

                <DashboardInfoCard
                  title="Employee Wise Training Passed"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                <DashboardInfoCard
                  title="Employee Wise Training Failed"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                <DashboardInfoCard
                  title="Dept Wise Pending Approval"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                <DashboardInfoCard
                  title="User Wise Pending Approval"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                <DashboardInfoCard
                  title="Dept Wise Training Approved"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
                <DashboardInfoCard
                  title="User Wise Training Approved"
                  value="-"
                  progress="-"
                  previousValue="-"
                />
              </div>
            </div>
            <div className="hr-section">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <h3 className="page-title text-dark">HR</h3>
                    {/* <ul className="breadcrumb">
                            <li className="breadcrumb-item active">User</li>
                        </ul> */}
                  </div>
                </div>
              </div>

              {/* Statistics, Task Statistics, and Today Absent Sections */}
              <div className="row">
                {/* Statistics Section */}
                <StatisticsSection />
                {/* Task Statistics Section */}
                <TaskStatisticsSection />
                {/* Today Absent Section */}
                {/* <TodayAbsentSection /> */}
              </div>

              {/* Invoices and Payments Tables */}
              <div className="row">
                {/* Invoices Table */}
                {/* <TableCard title="Invoices" tableId="invoice-table" /> */}
                {/* Payments Table */}
                {/* <TableCard title="Payments" tableId="payment-table" /> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function Widget({ icon, value, label }) {
  return (
    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
      <div className="card dash-widget">
        <div className="card-body">
          <span className="dash-widget-icon">
            <i className={icon}></i>
          </span>
          <div className="dash-widget-info">
            <h3>{value}</h3>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function Widget1({ icon, value, label }) {
  return (
    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
      <div className="card dash-widget">
        <div className="card-body">
          <span className="dash-widget-icon">
            <i className={icon}></i>
          </span>
          <div className="dash-widget-info">
            <h3>{value}</h3>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function DashboardCard({ title, chartId }) {
  return (
    <div className="col-md-6 text-center">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <div id={chartId}></div>
        </div>
      </div>
    </div>
  );
}

function DashboardInfoCard({ title, value, progress, previousValue }) {
  return (
    <div className="col-md-3">
      <div className="card dash-widget">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <span className="d-block">{title}</span>
            </div>
            <div>
              <span
                className={
                  progress.includes("-") ? "text-danger" : "text-success"
                }
              >
                {progress}
              </span>
            </div>
          </div>
          <h3 className="mb-3">{value}</h3>
          <div className="progress mb-2" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: progress }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            ></div>
          </div>
          {previousValue && (
            <p className="mb-0">
              Previous Month <span className="text-muted">{previousValue}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatisticsSection() {
  return (
    <div className="col-md-12 col-lg-12 col-xl-6 d-flex">
      <div className="card flex-fill dash-statistics">
        <div className="card-body">
          <h5 className="card-title fw-bold">Company</h5>
          <div className="stats-list">
            {/* Statistics Info */}
            <div className="stats-info">
              <p>
                Training Need
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "31%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Schedule
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "31%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Pass
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "62%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Fail
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "62%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Feedback Given
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-purple"
                  role="progressbar"
                  style={{ width: "22%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Feedback Pending
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "22%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Approval Pending
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "22%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
            <div className="stats-info">
              <p>
                Training Approval Done
                <strong>
                - <small>/ -</small>
                </strong>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: "22%" }}
                  aria-valuenow="-"
                  aria-valuemin="-"
                  aria-valuemax="-"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskStatisticsSection() {
  return (
    <div className="col-md-12 col-lg-6 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-body">
          <h4 className="card-title">Department</h4>
          <div className="statistics">
            <div className="row">
              <div className="col-md-6 col-6 text-center">
                <div className="stats-box mb-4">
                  <p>Training Need</p>
                  <h3>-</h3>
                </div>
              </div>
              <div className="col-md-6 col-6 text-center">
                <div className="stats-box mb-4">
                  <p>Training Schedule</p>
                  <h3>-</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-purple"
              role="progressbar"
              style={{ width: "30%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
              -
            </div>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "22%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
              -
            </div>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "24%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
              -
            </div>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "26%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
             -
            </div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
              -
            </div>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
            -
            </div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
             -
            </div>
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="-"
              aria-valuemin="-"
              aria-valuemax="-"
            >
             -
            </div>
          </div>
          <div>
            <p>
              <i className="fa fa-dot-circle-o text-purple me-2"></i>Training
              Need<span className="float-right">-</span>
            </p>
            <p>
              <i className="fa fa-dot-circle-o text-warning me-2 mt-3"></i>
              Training Schedule<span className="float-right">-</span>
            </p>
            <p>
              <i className="fa fa-dot-circle-o text-success me-2 mt-3"></i>
              Training Pass<span className="float-right">-</span>
            </p>
            <p>
              <i className="fa fa-dot-circle-o text-danger me-2 mt-3"></i>
              PTraining Fail <span className="float-right">-</span>
            </p>
            <p className="mb-0">
              <i className="fa fa-dot-circle-o text-info me-2 mt-3"></i>Training
              Feedback Given<span className="float-right">-</span>
            </p>
            <p className="mb-0">
              <i className="fa fa-dot-circle-o text-primary me-2 mt-3"></i>
              Training Feedback Pending<span className="float-right">-</span>
            </p>
            <p className="mb-0">
              <i className="fa fa-dot-circle-o text-info me-2 mt-3"></i>Training
              Approval Pending<span className="float-right">-</span>
            </p>
            <p className="mb-0">
              <i className="fa fa-dot-circle-o text-dark me-2 mt-3"></i>Training
              Approval Done<span className="float-right">-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodayAbsentSection() {
  return (
    <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
      <div className="card flex-fill">
        <div className="card-body">
          <h4 className="card-title">
            Today Absent <span className="badge bg-inverse-danger ml-2">5</span>
          </h4>
          <div className="leave-info-box">{/* Today Absent Info Box */}</div>
          <div className="leave-info-box">{/* Today Absent Info Box */}</div>
          <div className="load-more text-center">
            <NavLink to="" className="text-dark">
              Load More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCard({ title, tableId }) {
  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead></thead>
              <tbody id={tableId}></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
