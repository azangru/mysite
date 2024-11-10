import eslintJs from "@eslint/js";

export default [
  eslintJs.configs.recommended,
  {
    "rules": {
      "semi": 1,
      "eqeqeq": 1,
      "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
      "no-console": 1
    }
  }
];
