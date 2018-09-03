import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import save from './index'
import { TOOGLE_SAVE } from './actions'

it('Should change the initial state from false to true', () => {
  const before = deepfreeze({
    status: false
  })
  const action = deepfreeze({
    type: TOOGLE_SAVE,
    payload: {
      status: true
    }
  })
  const after = {
    status: true
  }
  expect(save(before, action)).to.be.deep.equal(after)
})

it('Should change the initial state from true to false', () => {
  const before = deepfreeze({
    status: true
  })
  const action = deepfreeze({
    type: TOOGLE_SAVE,
    payload: {
      status: false
    }
  })
  const after = {
    status: false
  }
  expect(save(before, action)).to.be.deep.equal(after)
})
