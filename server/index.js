const express = require("express")
const app = express()
const cors = require('cors')
const fs = require('fs')

const { readPlans } = require('./operations')

app.use(cors())
app.use(express.json())

// get all plans
app.get('/plans', async (req, res) => {
  const plans = readPlans()

  res.send(plans)
})

// add session to plan
app.put('/plans/:planId', async (req, res) => {
  const { planId } = req.params
  console.log({ b: req.body, planId })

  const data = JSON.parse(readPlans())

  data.plans[planId].sessions.push(req.body)

  fs.writeFileSync('./storage/plans.json', JSON.stringify(data))

  res.sendStatus(200)
})

app.listen(3009, () => {
  console.log("Server has started! Open http://localhost:3009")
})

