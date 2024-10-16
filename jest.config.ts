export default {
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/mocks/fileMock.ts",
  },
};
