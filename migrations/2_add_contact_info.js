var ContactInfo = artifacts.require("./ContactInfo.sol");

module.exports = function(deployer) {
  // Setup deployer function to pass data to contract constructor
  deployer.deploy(
    ContactInfo,
    "Alec M. Wantoch", // name
    "alec@wantoch.net", // email
    "https://github.com/awantoch", // github
    "1JjEUxQgcigjvoRFQd8pyZEeMEx1873YEd", // btc address
    "0x377D0d8a98e5974cfcBCFfe5df784Ea12A720F15" // eth address
  );
};
