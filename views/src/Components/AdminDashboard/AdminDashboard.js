import React, { Component } from "react";

import DashboardContent from "./DashboardContent/DashboardContent";
import ProductsContent from "./ProductsContent/ProductsContent";
import "./AdminDashboard.css";
import "../Dashboard.css";
import resumeData from "../resumeContent/resumeData";
import ResumeContent from "../resumeContent/ResumeContent";

// import ACTIONS
// import { getCurrentProfile } from "../../../actions/profileAction";

class AdminDashboard extends Component {
  state = {
    isDashboardClicked: true,
    isProductClicked: false,
    isResumeClicked: false,
    isUserClicked: false,
    isSettingClicked: false,
    isPaymentsClicked: false
  };

  renderProducts = () => {
    this.setState({
      isProductClicked: true,
      isResumeClicked: false,
      isUserClicked: false,
      isSettingClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false
    });
  };

  renderResume = () => {
    this.setState({
      isResumeClicked: true,
      isUserClicked: false,
      isSettingClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false,
      isProductClicked: false
    });
  };

  renderUsers = () => {
    this.setState({
      isUserClicked: true,
      isResumeClicked: false,
      isSettingClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false,
      isProductClicked: false
    });
  };
  renderPayments = () => {
    this.setState({
      isPaymentsClicked: true,
      isUserClicked: false,
      isResumeClicked: false,
      isSettingClicked: false,
      isDashboardClicked: false,
      isProductClicked: false
    });
  };
  renderSettings = () => {
    this.setState({
      isSettingClicked: true,
      isUserClicked: false,
      isResumeClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false,
      isProductClicked: false
    });
  };
  renderDashboard = () => {
    this.setState({
      isDashboardClicked: true,
      isSettingClicked: false,
      isUserClicked: false,
      isResumeClicked: false,
      isPaymentsClicked: false,
      isProductClicked: false
    });
  };

  render() {
    return (
      <div>
        <div id="nav" className="side-nav sidenav">
          <div className="sidenav__profile ">
            <div className="profile-avatar sidenav__profile-avatar" />
            <div className="sidenav__profile-title text-light">Tawhid Abdullah</div>
          </div>
          <ul>
            <li
              className={this.state.isDashboardClicked ? "active" : "deactive"}
              onClick={this.renderDashboard}
            >
              <a>
                <i className="fa fa-fw fa-dashboard" />
                <span>Dashboard</span>
              </a>
            </li>
            <li
              className={this.state.isProductClicked ? "active" : "deactive"}
              onClick={this.renderProducts}
            >
              <a href="#">
                <i className="fa fa-fw fa-edit" />
                <span className="swatch light-grey">Projects</span>
              </a>
            </li>
            <li
              className={this.state.isResumeClicked ? "active" : "deactive"}
              onClick={this.renderResume}
            >
              <a href="#">
                <i className="fa fa-fw fa-pencil" />
                <span className="swatch light-grey">Resume</span>
              </a>
            </li>
            <li
              className={this.state.isUserClicked ? "active" : "deactive"}
              onClick={this.renderUsers}
            >
              <a href="#">
                <i className="fa fa-fw fa-user" />
                <span>Users</span>
              </a>
            </li>
            <li
              className={this.state.isPaymentsClicked ? "active" : "deactive"}
              onClick={this.renderPayments}
            >
              <a href="#">
                <i className="fa fa-fw fa-money" />
                <span>Payments</span>
              </a>
            </li>
            <li
              className={this.state.isSettingClicked ? "active" : "deactive"}
              onClick={this.renderSettings}
            >
              <a href="#">
                <i className="fa fa-fw fa-cog" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="main">
          <div id="content">
            <div className="box">
              {this.state.isProductClicked ? (
                <ProductsContent clicked={this.renderAddProducts} />
              ) : (
                ""
              )}

              {this.state.isDashboardClicked ? <DashboardContent /> : ""}
              {this.state.isResumeClicked ? (
                <ResumeContent resumeData={resumeData} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;

// <div class="menu">

// <div id="panel">
//   <label class="text" for="toggle">Admin Settings</label>
//   <label class="icon fa fa-cog" for="toggle"></label>
// </div>

// <input type="checkbox" id="toggle" />

// <div class="dropdown">
//   <div class="arrow"></div>

//   <a href="#" class="row">
//     <div class="text">Edit User</div>
//     <i class="icon fa fa-user"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Statistics</div>
//     <i class="icon fa fa-home"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Upload Settings</div>
//     <i class="icon fa fa-upload"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Edit Sliders</div>
//     <i class="icon fa fa-pencil"></i>
//   </a>
// </div>

// </div>
