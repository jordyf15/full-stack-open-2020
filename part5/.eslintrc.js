module.exports = {
"env": {
    "browser": true,
    "es6": true,
    "jest/globals": true 
},
"extends": [ 
    "eslint:recommended",
    "plugin:react/recommended"
],
"parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
},
"plugins": [
    "react", "jest"
],
"rules": {
  
    "arrow-spacing": [
        "error", { "before": false, "after": false }
    ],
    "no-console": 0,
    "react/prop-types": 0
},
"settings": {
  "react": {
    "version": "detect"
  }
}
}