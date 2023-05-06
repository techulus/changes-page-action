const process = require("process");
const cp = require("child_process");
const path = require("path");

jest.mock("./client", () => ({
  createPost: jest.fn(),
}));

describe("Action", () => {
  test("test runs", () => {
    process.env["INPUT_PAGE_SECRET"] = "test";
    process.env["INPUT_POST_TITLE"] = "test";
    process.env["INPUT_POST_CONTENT"] = "test";
    process.env["INPUT_POST_TYPE"] = "test";
    process.env["INPUT_POST_STATUS"] = "test";

    const ip = path.join(__dirname, "index.js");

    expect(() => {
      cp.execSync(`node ${ip}`, { env: process.env }).toString();
    }).not.toThrowError();
  });
});
