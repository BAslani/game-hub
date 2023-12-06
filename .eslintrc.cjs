module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "prettier",
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
    "tailwindcss",
    "import-path",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "import-path/parent-depth": ["error", 2],
    "import-path/forbidden": [
      "error",
      [
        {
          match: "/index.*$",
          message: "index on the end of path is redundant",
        },
      ],
    ],
  },
};
