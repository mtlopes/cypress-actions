const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImViM2JjMzQ2LWM5ODItNDZkMy04N2RlLWQ2MTQzZmUxNGU1MS0xNjgyOTY2OTA1MzQ1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTdhYzBlMzQtMmRjOS00NWJiLTk2NDgtOGY3NmJiNWMwNzU4IiwidHlwZSI6InQifQ.YNe4Ix6o7sSRCRx78hRPqTY5D6DJ6ASpyGBvFSC4_ds'

cypress.run({
  //specs to run here
})
.then((results)) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
console.error(err)     
})
