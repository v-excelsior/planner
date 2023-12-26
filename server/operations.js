const fs = require("fs");

const readPlans = () => fs.readFileSync('./storage/plans.json').toString()

module.exports = {
  readPlans
}
