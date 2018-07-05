const path = require("path");

const config = {
  parser: "babel-eslint",
  env: {
    node: true
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        root: __dirname
      },
      alias: [["appalias", path.resolve(__dirname, "src/app")]]
    }
  }
};

module.exports = config;
