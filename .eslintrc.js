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
    "no-shadow": "off",
    "arrow-body-style": "off",
    "object-curly-newline": [1, { "ObjectPattern": { "multiline": true } }],
    // "eslint-plugin-jsx-a11y"
    // ...a11yOff,
    // "eslint-plugin-react"
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "react/jsx-no-bind": [0, { "allowBind": true }]
  },
};
