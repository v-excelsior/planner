import { apiClient } from 'api'
import { createEffect, createStore } from 'effector'

export const loadPlansFx = createEffect(loadPlans)
export const saveSessionFx = createEffect(saveSession)
export const removeLastSessionFx = createEffect(removeLastSession)

async function loadPlans() {
  return apiClient.get('plans')
}

async function saveSession({ planId, session }) {
  return apiClient.put(`plans/${ planId }`, session)
}

async function removeLastSession({ planId }) {
  return apiClient.delete(`plans/${ planId }`)
}


export const $plans = createStore([])
  .on(loadPlansFx.doneData, (_store, res) => res.data)
  .on(saveSessionFx.doneData, (_store, res) => res.data)
  .on(removeLastSessionFx.doneData, (_store, res) => res.data)
