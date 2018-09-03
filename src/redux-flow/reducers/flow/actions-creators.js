import { ADD_FLOW, REMOVE_FLOW, CHANGE_FLOW } from './actions'

export const addFlow = (item) => ({
  type: ADD_FLOW,
  payload: item
})
export const removeFlow = (id) => ({
  type: REMOVE_FLOW,
  payload: {
    id: id
  }
})
export const changeFlow = (item) => ({
  type: CHANGE_FLOW,
  payload: item
})
