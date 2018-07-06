const eslint = require("eslint");

const config = require("./.eslintrc.js");

const CLIEngine = eslint.CLIEngine;

const cli = new CLIEngine({
  ...config,
  useEslintrc: false,
  fix: true
});
const results = cli.executeOnFiles(["./src/example.js"]);
CLIEngine.outputFixes(results);
console.info("Results:\n" + JSON.stringify(results, null, 2));
