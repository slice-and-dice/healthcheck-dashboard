import React, { Component } from "react";
import "./MainDashboard.css";
import { MainDashboardCard } from "./components/MainDashboardCard";

class MainDashboard extends Component {
  constructor() {
    super();
    this.state = {
      devData: {}
    };
  }

  apiCall = async () => {
    const response = await fetch("/data");
    const devData = await response.json();
    this.setState({ devData });
  };

  componentDidMount() {
    this.apiCall();
  }
  render() {
    return (
      <div className="grid-container">
        <MainDashboardCard
          background={this.state.devData.frontEndHealthcheckColor}
          title="Development"
        />
        <MainDashboardCard background="green" title="Testing" />
        <MainDashboardCard background="red" title="Stage" />
        <MainDashboardCard background="green" title="Production" />
        <h1>{this.state.devData.frontEndHealthcheckColor}</h1>
      </div>
    );
  }
}

export default MainDashboard;
