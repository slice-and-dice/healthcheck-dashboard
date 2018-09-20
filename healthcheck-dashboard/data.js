const fetch = require("node-fetch");

const devUrls = {
  healthcheckPathFrontEnd:
    "https://dev-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://dev-register-a-food-business-service.azurewebsites.net/api/status/healthcheck",
  statusPathFrontEnd:
    "https://dev-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://dev-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const testUrls = {
  healthcheckPathFrontEnd:
    "https://test-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://test-register-a-food-business-service.azurewebsites.net/api/status/healthcheck",
  statusPathFrontEnd:
    "https://test-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://test-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const stagingUrls = {
  healthcheckPathFrontEnd:
    "https://staging-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://staging-register-a-food-business-service.azurewebsites.net/api/status/healthcheck",
  statusPathFrontEnd:
    "https://staging-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://staging-register-a-food-business-service.azurewebsites.net/api/status/all"
};
const prodUrls = {
  healthcheckPathFrontEnd:
    "https://prod-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://prod-register-a-food-business-serviceazurewebsites.net/api/status/healthcheck",
  statusPathFrontEnd:
    "https://prod-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://prod-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const getDevHealthcheck = async () => {
  const devData = {};
  const frontEndHealthcheckDev = await fetch(devUrls.healthcheckPathFrontEnd);

  if (frontEndHealthcheckDev.status === 200) {
    devData.frontEndHealthcheck = "PASSING";
  } else {
    devData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckDev = await fetch(devUrls.healthcheckPathBackEnd);
  if (backEndHealthcheckDev.status === 200) {
    devData.backEndHealthcheck = "PASSING";
  } else {
    devData.backEndHealthcheck = "FAILING";
  }

  if (
    devData.frontEndHealthcheck === "PASSING" &&
    devData.backEndHealthcheck === "PASSING"
  ) {
    devData.healthcheckColor = "green";
  } else {
    devData.healthcheckColor = "red";
  }
  return devData;
};

const getTestHealthcheck = async () => {
  const testData = {};
  const frontEndHealthcheckTest = await fetch(testUrls.healthcheckPathFrontEnd);
  if (frontEndHealthcheckTest.status === 200) {
    testData.frontEndHealthcheck = "PASSING";
  } else {
    testData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckTest = await fetch(testUrls.healthcheckPathBackEnd);
  if (backEndHealthcheckTest.status === 200) {
    testData.backEndHealthcheck = "PASSING";
  } else {
    testData.backEndHealthcheck = "FAILING";
  }

  if (
    testData.frontEndHealthcheck === "PASSING" &&
    testData.backEndHealthcheck === "PASSING"
  ) {
    testData.healthcheckColor = "green";
  } else {
    testData.healthcheckColor = "red";
  }
  return testData;
};

// const getStatus = async () => {
//     if (frontEndStatus.status === 200) {
//       const frontEndStatusJson = await frontEndStatus.json();
//       for (let statusName in frontEndStatusJson) {
//         if (frontEndStatusJson[statusName] === false) {
//           // Indicates that a service failed the last time it was called
//           console.log(statusName + ": " +`${frontEndStatusJson[statusName]}`);
//         } else if (
//           statusName.includes("Failed") &&
//           Number.isInteger(frontEndStatusJson[statusName]) &&
//           frontEndStatusJson[statusName] > 0
//         ) {
//           // Indicates that a service has failed at least once
//           console.log(
//             statusName + ": " + `${frontEndStatusJson[statusName]}`
//           );
//         } else {
//           // Indicates that a service is currently working or worked the most recent time it was called.
//           console.log(
//             statusName + ": " + `${frontEndStatusJson[statusName]}`
//           );
//         }
//       }
//     } else {
//       console.log(
//         `FAILED. Front end in environment "${environment}" responded with status: ${
//           frontEndStatus.status
//         }`.red
//       );
//     }
//   }
// };

const getHealthcheckData = async () => {
  const devData = await getDevHealthcheck();
  const testData = await getTestHealthcheck();
  const data = {
    devData,
    testData
  };
  return data;
};

module.exports = { getHealthcheckData };

// setInterval(getDevHealthcheck, 30000);
// setInterval(getStatus, 30000);
