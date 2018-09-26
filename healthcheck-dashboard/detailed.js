const fetch = require("node-fetch");

const devUrls = {
  statusPathFrontEnd:
    "https://dev-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://dev-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const testUrls = {
  statusPathFrontEnd:
    "https://test-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://test-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const stagingUrls = {
  statusPathFrontEnd:
    "https://staging-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://staging-register-a-food-business-service.azurewebsites.net/api/status/all"
};
const prodUrls = {
  statusPathFrontEnd:
    "https://prod-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://prod-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const getDevStatus = async () => {
  const devFrontendStatusData = {};
  const frontEndStatusDev = await fetch(devUrls.statusPathFrontEnd);
  if (frontEndStatusDev.status === 200) {
    devFrontendStatusData.frontendStatus = `Dev Frontend is PASSING with status: ${
      frontEndStatusDev.status
    }`;
    const frontEndStatusDevJson = await frontEndStatusDev.json();
    for (let statusName in frontEndStatusDevJson) {
      devFrontendStatusData[statusName] = `${
        frontEndStatusDevJson[statusName]
      }`;
    }
  } else {
    devFrontendStatusData.frontendStatus = `Dev frontend is Failing with status: ${
      frontEndStatusDev.status
    }`;
  }

  const devBackendStatusData = {};
  const backEndStatusDev = await fetch(devUrls.statusPathBackEnd);
  if (backEndStatusDev.status === 200) {
    devBackendStatusData.backendStatus = `Dev Backend is PASSING with status: ${
      backEndStatusDev.status
    }`;
    const backEndStatusDevJson = await backEndStatusDev.json();
    console.log(backEndStatusDevJson);
    for (let statusName in backEndStatusDevJson) {
      devBackendStatusData[statusName] = `${backEndStatusDevJson[statusName]}`;
    }
  } else {
    devBackendStatusData.backendStatus = `Dev backend is Failing with status: ${
      backEndStatusDev.status
    }`;
  }
  const devStatusData = {
    devFrontendStatusData,
    devBackendStatusData
  };

  return devStatusData;
};

const getProdStatus = async () => {
  const prodFrontendStatusData = {};
  const frontEndStatusProd = await fetch(prodUrls.statusPathFrontEnd);
  if (frontEndStatusProd.status === 200) {
    prodFrontendStatusData.frontendStatus = `Prod Frontend is PASSING with status: ${
      frontEndStatusProd.status
    }`;
    const frontEndStatusProdJson = await frontEndStatusProd.json();
    for (let statusName in frontEndStatusProdJson) {
      prodFrontendStatusData[statusName] = `${
        frontEndStatusProdJson[statusName]
      }`;
    }
  } else {
    prodFrontendStatusData.frontendStatus = `Prod frontend is Failing with status: ${
      frontEndStatusProd.status
    }`;
  }

  const prodBackendStatusData = {};
  const backEndStatusProd = await fetch(prodUrls.statusPathBackEnd);
  if (backEndStatusProd.status === 200) {
    prodBackendStatusData.backendStatus = `Prod Backend is PASSING with status: ${
      backEndStatusProd.status
    }`;
    const backEndStatusProdJson = await backEndStatusProd.json();
    console.log(backEndStatusProdJson);
    for (let statusName in backEndStatusProdJson) {
      prodBackendStatusData[statusName] = `${
        backEndStatusProdJson[statusName]
      }`;
    }
  } else {
    prodBackendStatusData.backendStatus = `Prod backend is Failing with status: ${
      backEndStatusProd.status
    }`;
  }
  const prodStatusData = {
    prodFrontendStatusData,
    prodBackendStatusData
  };

  return prodStatusData;
};

const getTestStatus = async () => {
  const testFrontendStatusData = {};
  const frontEndStatusTest = await fetch(testUrls.statusPathFrontEnd);
  if (frontEndStatusTest.status === 200) {
    testFrontendStatusData.frontendStatus = `Test Frontend is PASSING with status: ${
      frontEndStatusTest.status
    }`;
    const frontEndStatusTestJson = await frontEndStatusTest.json();
    for (let statusName in frontEndStatusTestJson) {
      testFrontendStatusData[statusName] = `${
        frontEndStatusTestJson[statusName]
      }`;
    }
  } else {
    testFrontendStatusData.frontendStatus = `Test frontend is Failing with status: ${
      frontEndStatusTest.status
    }`;
  }

  const testBackendStatusData = {};
  const backEndStatusTest = await fetch(testUrls.statusPathBackEnd);
  if (backEndStatusTest.status === 200) {
    testBackendStatusData.backendStatus = `Test Backend is PASSING with status: ${
      backEndStatusTest.status
    }`;
    const backEndStatusTestJson = await backEndStatusTest.json();
    for (let statusName in backEndStatusTestJson) {
      testBackendStatusData[statusName] = `${
        backEndStatusTestJson[statusName]
      }`;
    }
  } else {
    testBackendStatusData.backendStatus = `Test backend is Failing with status: ${
      backEndStatusTest.status
    }`;
  }
  const testStatusData = {
    testFrontendStatusData,
    testBackendStatusData
  };

  return testStatusData;
};

const getStagingStatus = async () => {
  const stagingFrontendStatusData = {};
  const frontEndStatusStaging = await fetch(stagingUrls.statusPathFrontEnd);
  if (frontEndStatusStaging.status === 200) {
    stagingFrontendStatusData.frontendStatus = `Staging Frontend is PASSING with status: ${
      frontEndStatusStaging.status
    }`;
    const frontEndStatusStagingJson = await frontEndStatusStaging.json();
    for (let statusName in frontEndStatusStagingJson) {
      stagingFrontendStatusData[statusName] = `${
        frontEndStatusStagingJson[statusName]
      }`;
    }
  } else {
    stagingFrontendStatusData.frontendStatus = `Staging frontend is Failing with status: ${
      frontEndStatusStaging.status
    }`;
  }

  const stagingBackendStatusData = {};
  const backEndStatusStaging = await fetch(stagingUrls.statusPathBackEnd);
  if (backEndStatusStaging.status === 200) {
    stagingBackendStatusData.backendStatus = `Staging Backend is PASSING with status: ${
      backEndStatusStaging.status
    }`;
    const backEndStatusStagingJson = await backEndStatusStaging.json();
    for (let statusName in backEndStatusStagingJson) {
      stagingBackendStatusData[statusName] = `${
        backEndStatusStagingJson[statusName]
      }`;
    }
  } else {
    stagingBackendStatusData.backendStatus = `Staging backend is Failing with status: ${
      backEndStatusStaging.status
    }`;
  }
  const stagingStatusData = {
    stagingFrontendStatusData,
    stagingBackendStatusData
  };

  return stagingStatusData;
};

const getStatusData = async env => {
  if (env === "dev") {
    return getDevStatus();
  } else if (env === "prod") {
    return getProdStatus();
  } else if (env === "test") {
    return getTestStatus();
  } else if (env === "staging") {
    return getStagingStatus();
  }
};

module.exports = { getStatusData };

setInterval(getStatusData, 30000);
