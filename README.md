This is an example of eslint CLIEngine removing empty lines incorrectly for the import/order rule.

For file `src/example.js`, eslint complains that there should be an empty line between `const main - require("src/main");` and `const app - require("appalias");`. These are the results from different methods:

Results of testing:
| Method | useEslintRC | Result |
|--------------|-------------|--------|
| eslint --fix | true | Fixed |
| eslint --fix | false | Fixed |
| CLIEngine | true | Fixed |
| CLIEngine | false | Broken |
