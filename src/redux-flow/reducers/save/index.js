'use strict'
import createReducer from '../create-reducer'
import { TOOGLE_SAVE } from './actions'

const initialState = {
  status: false
}

const save = createReducer(initialState, {
  [TOOGLE_SAVE]: (state, action) => ({
    ...state,
    status: action.payload.status
  })
})

export default save
