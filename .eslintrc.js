module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier"],
  rules: {
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
