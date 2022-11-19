module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    // ..more code to disable eslint-plugin-jsx-ally
    // ...a11yOff,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "quotes": [1, "double"],
    "quote-props": "off",
    "semi": [0, "never"],
    "padded-blocks": ["error", { "classes": "always" }],
    "react/destructuring-assignment": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
    "no-multiple-empty-lines": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-nested-ternary": "off",
  },
};
