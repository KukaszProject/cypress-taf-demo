import cypressPlugin from "eslint-plugin-cypress";

export default [
  cypressPlugin.configs.recommended,
  {
    rules: {
      "cypress/no-unnecessary-waiting": "error",
      "cypress/no-force": "warn",
    },
  },
];