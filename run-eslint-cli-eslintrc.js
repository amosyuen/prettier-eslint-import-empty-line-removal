const eslint = require("eslint");

const CLIEngine = eslint.CLIEngine;

const cli = new CLIEngine({
  useEslintrc: true,
  fix: true
});
const results = cli.executeOnFiles(["./src/example.js"]);
CLIEngine.outputFixes(results);
console.info("Results:\n" + JSON.stringify(results, null, 2));
