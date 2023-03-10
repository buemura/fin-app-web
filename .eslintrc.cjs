module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
  },
};
