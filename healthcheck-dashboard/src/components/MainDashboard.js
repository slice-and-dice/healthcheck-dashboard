import React, { Component } from "react";
import "./MainDashboard.css";
import { MainDashboardCard } from "./MainDashboardCard";

class MainDashboard extends Component {
  constructor() {
    super();
    this.state = {
      allData: {
        devData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING",
          healthcheckColor: "yellow"
        },
        testData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING",
          healthcheckColor: "yellow"
        },
        stagingData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING",
          healthcheckColor: "yellow"
        },
        prodData: {
          frontEndHealthcheck: "LOADING",
          backEndHealthcheck: "LOADING",
          healthcheckColor: "yellow"
        }
      }
    };
  }

  apiCall = async () => {
    const response = await fetch("/data");
    const allData = await response.json();
    console.log(allData);
    this.setState({ allData });
    console.log(this.state);
  };

  componentDidMount() {
    this.apiCall();
  }

  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <div className="grid-container">
        <MainDashboardCard
          background={this.state.allData.devData.healthcheckColor}
          title="Development"
          frontendStatus={this.state.allData.devData.frontEndHealthcheck}
          backendStatus={this.state.allData.devData.backEndHealthcheck}
          href="/dev-status"
          onClick={this.handleClick}
        />

        <MainDashboardCard
          background={this.state.allData.testData.healthcheckColor}
          title="Testing"
          frontendStatus={this.state.allData.testData.frontEndHealthcheck}
          backendStatus={this.state.allData.testData.backEndHealthcheck}
          href="/test-status"
          onClick={this.handleClick}
        />
        <MainDashboardCard
          background={this.state.allData.stagingData.healthcheckColor}
          title="Staging"
          frontendStatus={this.state.allData.stagingData.frontEndHealthcheck}
          backendStatus={this.state.allData.stagingData.backEndHealthcheck}
          href="/staging-status"
          onClick={this.handleClick}
        />
        <MainDashboardCard
          background={this.state.allData.prodData.healthcheckColor}
          title="Production"
          frontendStatus={this.state.allData.prodData.frontEndHealthcheck}
          backendStatus={this.state.allData.prodData.backEndHealthcheck}
          href="/prod-status"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default MainDashboard;
