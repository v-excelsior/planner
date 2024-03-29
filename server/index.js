const express = require("express")
const app = express()
const cors = require('cors')
const path = require('path')

const { getPlans, getPlan, updatePlan } = require('./operations')

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../build')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('../build/index.html'));
});

// get all plans
app.get('/plans', async (req, res) => res.send(getPlans()))

// add session to plan
app.put('/plans/:planId', async (req, res) => {
  const { planId } = req.params

  const plan = getPlan(planId)

  plan.sessions.push(req.body)

  updatePlan(plan)

  res.send(getPlans())
})

// remove last session from plan
app.delete('/plans/:planId', async (req, res) => {
  const { planId } = req.params

  const plan = getPlan(planId)

  plan.sessions.splice(-1)

  updatePlan(plan)

  res.send(getPlans())
})

app.listen(3001, () => {
  console.log("Server has started! Open http://localhost:3001")
})


