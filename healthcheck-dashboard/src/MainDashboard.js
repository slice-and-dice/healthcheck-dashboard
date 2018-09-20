import React, { Component } from "react";
import "./MainDashboard.css";
import { MainDashboardCard } from "./components/MainDashboardCard";

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

  render() {
    return (
      <div className="grid-container">
        <MainDashboardCard
          background={this.state.allData.devData.healthcheckColor}
          title="Development"
        />
        <MainDashboardCard
          background={this.state.allData.testData.healthcheckColor}
          title="Testing"
        />
        <MainDashboardCard background="red" title="Stage" />
        <MainDashboardCard background="green" title="Production" />
      </div>
    );
  }
}

export default MainDashboard;
