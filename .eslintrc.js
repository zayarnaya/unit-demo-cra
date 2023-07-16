module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    "rules": {
        "testing-library/prefer-screen-queries": "off",
        "testing-library/no-debugging-utils": "off",
        "@typescript-eslint/no-unused-vars": "off"
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
  }
