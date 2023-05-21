module.exports = 
{
    "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    },
    "moduleNameMapper": {
        "axios": "axios/dist/node/axios.cjs"
    }
  },
    "verbose": true,
    "collectCoverage": true
}