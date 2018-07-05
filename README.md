This is an example of prettier-eslint removing empty lines incorrectly for the import/order rule.

For file `src/example.js`, eslint complains that there should be an empty line between `const main = require("src/main");` and `const app = require("appalias");`. Upon running `eslint --fix src/example.js`, eslint will correctly add the missing line. However, if we run `prettier-eslint --list-different --write src/example.js`, the line between the imports will be removed.
