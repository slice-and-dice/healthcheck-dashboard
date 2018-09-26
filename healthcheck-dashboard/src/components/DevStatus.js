import React, { Component } from "react";
import { StatusTable } from "./StatusTable";

class DevStatus extends Component {
  constructor() {
    super();
    this.state = {
      devData: {
        devFrontendStatusData: {
          frontendStatus: "Loading",
          registrationsStarted: "Loading",
          submissionsSucceeded: "Loading",
          submissionsFailed: "Loading",
          mostRecentSubmitSucceeded: "Loading",
          addressLookupsSucceeded: "Loading",
          addressLookupsReturnedZero: "Loading",
          addressLookupsFailed: "Loading",
          mostRecentAddressLookupSucceeded: "Loading"
        },
        devBackendStatusData: {
          backendStatus: "Loading",
          submissionsReceived: "Loading",
          authenticationsPassed: "Loading",
          authenticationsBlocked: "Loading",
          fsaRnCallsSucceeded: "Loading",
          fsaRnCallsFailed: "Loading",
          mostRecentFsaRnCallSucceeded: "Loading",
          tascomiCreateRegistrationCallsSucceeded: "Loading",
          tascomiCreateRegistrationCallsFailed: "Loading",
          mostRecentTascomiCreateRegistrationSucceeded: "Loading",
          tascomiCreateRefnumberCallsSucceeded: "Loading",
          tascomiCreateRefnumberCallsFailed: "Loading",
          mostRecentTascomiCreateRefnumberSucceeded: "Loading",
          storeRegistrationsInDbSucceeded: "Loading",
          storeRegistrationsInDbFailed: "Loading",
          mostRecentStoreRegistrationInDbSucceeded: "Loading",
          storeRegistrationsInCacheSucceeded: "Loading",
          storeRegistrationsInCacheFailed: "Loading",
          mostRecentRegistrationInCacheSucceeded: "Loading",
          getConfigFromDbSucceeded: "Loading",
          getConfigFromDbFailed: "Loading",
          mostRecentGetConfigFromDbSucceeded: "Loading",
          emailNotificationsSucceeded: "Loading",
          emailNotificationsFailed: "Loading",
          mostRecentEmailNotificationSucceeded: "Loading",
          endToEndRegistrationsSucceeded: "Loading",
          endToEndRegistrationsFailed: "Loading",
          mostRecentEndToEndRegistrationSucceeded: "Loading"
        }
      }
    };
  }

  apiCall = async () => {
    const response = await fetch("/detailed/dev");
    const devData = await response.json();
    console.log(devData);
    this.setState({ devData });
  };

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return <StatusTable data={this.state.devData.devFrontendStatusData} />;
    // return <StatusTable data={this.state.devData.devBackendStatusData} />;
  }
}

export default DevStatus;
