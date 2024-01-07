import { apiClient } from 'api'
import { createEffect, createStore } from 'effector'

export const loadPlansFx = createEffect(loadPlans)
export const saveSessionFx = createEffect(saveSession)

async function loadPlans() {
  return apiClient.get('plans')
}

async function saveSession({ planId, session }) {
  console.log({ planId, session })

  return apiClient.put(`plans/${ planId }`, session)
}


export const $plans = createStore([])
  .on(loadPlansFx.doneData, (_store, res) => res.data)
  .on(saveSessionFx.doneData, (_store, res) => res.data)
