import React, { Component } from "react";
import { StatusTable } from "./StatusTable";

class StagingStatus extends Component {
  constructor() {
    super();
    this.state = {
      stagingData: {
        stagingFrontendStatusData: {
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
        stagingBackendStatusData: {
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
    const response = await fetch("/detailed/staging");
    const stagingData = await response.json();
    console.log(stagingData);
    this.setState({ stagingData });
  };

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div>
        <StatusTable data={this.state.stagingData.stagingFrontendStatusData} />
        <StatusTable data={this.state.stagingData.stagingBackendStatusData} />
      </div>
    );
  }
}

export default StagingStatus;
