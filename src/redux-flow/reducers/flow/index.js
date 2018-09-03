'use strict'
import createReducer from '../create-reducer'
import { ADD_FLOW, CHANGE_FLOW, REMOVE_FLOW } from './actions'

const initialState = []

const flow = createReducer(initialState, {
  [ADD_FLOW]: (state, action) => state.concat({
    id: action.payload.id,
    text: action.payload.text,
    type: action.payload.type,
    direction: action.payload.direction,
    x: action.payload.x,
    y: action.payload.y
  }),
  [CHANGE_FLOW]: (state, action) => state.map((item) => {
    if (item.id !== action.payload.id) {
      return item
    }
    return {
      ...item,
      x: action.payload.x,
      y: action.payload.y
    }
  }),
  [REMOVE_FLOW]: (state, action) => state.filter((item) => {
    if (item.id !== action.payload.id) {
      return item
    }
  })
})

export default flow
