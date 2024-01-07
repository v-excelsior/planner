const fs = require("fs");

/* INIT STORAGE */
let storage = {}

storage = JSON.parse(fs.readFileSync('./storage/storage.json').toString())
/**/

const getPlan = (id) => storage.plans[id]

const getPlans = () => {
  return Object.values(storage.plans || {})
}

const updatePlan = plan => {
  storage.plans[plan.id] = plan

  fs.writeFileSync('./storage/storage.json', JSON.stringify(storage))
}

module.exports = {
  getPlans, getPlan, updatePlan
}
