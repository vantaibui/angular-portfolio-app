// jest.config.js
module.exports = {
    preset: "jest-preset-angular",
    roots: ["src"],
    testMatch: ["**/+(*.)+(spec).+(ts)"],
    setupFilesAfterEnv: ["<rootDir>/src/setup.jest.ts"],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/"
    ],
    collectCoverage: true,
    coverageReporters: ["html"],
    coverageDirectory: "coverage/angular-portfolio-app",
  };
  