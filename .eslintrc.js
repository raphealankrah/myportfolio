module.exports = {
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:storybook/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/typescript",
    "plugin:tailwindcss/recommended" // Ensure this is using the 'plugin:' prefix
  ],
  "rules": {
    "tailwindcss/classname-order": "warn", // Use colon (:) instead of semicolon (;) 
    // other rules...
  },
  "settings": {
    "tailwindcss": {
      // Optional configuration
    },
  },
};
