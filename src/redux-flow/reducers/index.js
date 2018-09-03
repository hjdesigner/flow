'use strict'
import { combineReducers } from 'redux'
import flow from './flow'
import save from './save'

export default combineReducers({
  flow,
  save
})
