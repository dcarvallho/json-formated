module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["components/**/*.js"],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: [
      "/node_modules/",
      "/dist/",
      "/examples/",
      "config.js",
    ],
  };