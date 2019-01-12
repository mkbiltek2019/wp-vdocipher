module.exports = {
  extends: [
    "plugin:@wordpress/eslint-plugin/recommended",
    'google'
  ],
  parserOptions : {
    ecmaVersion: 9,
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  rules: {
    'max-len': ['error', {
      code: 120,
    }],
    'indent': ['error', 2],
    "react/jsx-indent": ['error', 2],
    "react/jsx-indent-props": ['error', 2],
    "no-shadow": 0,
    "require-jsdoc": 0,
    "camelcase": 0,
  },
  "settings": {
      "react": {
        "version": "16.0",
      },
    },
};
