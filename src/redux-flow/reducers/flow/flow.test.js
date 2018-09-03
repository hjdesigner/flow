'use strict'
import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import flow from './index'
import { ADD_FLOW, CHANGE_FLOW, REMOVE_FLOW } from './actions'

it('Should add flow item', () => {
  const before = deepfreeze([])
  const action = deepfreeze({
    type: ADD_FLOW,
    payload: {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '0',
      y: '0'
    }
  })
  const after = [
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '0',
      y: '0'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
it('Should add a new flow item', () => {
  const before = deepfreeze([
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '0',
      y: '0'
    }
  ])
  const action = deepfreeze({
    type: ADD_FLOW,
    payload: {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '0',
      y: '0'
    }
  })
  const after = [
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '0',
      y: '0'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '0',
      y: '0'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
it('Should change X and Y first item', () => {
  const before = deepfreeze([
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '0',
      y: '0'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '0',
      y: '0'
    }
  ])
  const action = deepfreeze({
    type: CHANGE_FLOW,
    payload: {
      id: '01',
      x: '10',
      y: '10'
    }
  })
  const after = [
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '0',
      y: '0'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
it('Should change X and Y last item', () => {
  const before = deepfreeze([
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '0',
      y: '0'
    }
  ])
  const action = deepfreeze({
    type: CHANGE_FLOW,
    payload: {
      id: '02',
      x: '100',
      y: '50'
    }
  })
  const after = [
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '100',
      y: '50'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
it('Should remove first item', () => {
  const before = deepfreeze([
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '100',
      y: '50'
    }
  ])
  const action = deepfreeze({
    type: REMOVE_FLOW,
    payload: {
      id: '01'
    }
  })
  const after = [
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '100',
      y: '50'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
it('Should remove last item', () => {
  const before = deepfreeze([
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    },
    {
      id: '02',
      text: 'Acesse API',
      type: 'square',
      direction: 'none',
      x: '100',
      y: '50'
    }
  ])
  const action = deepfreeze({
    type: REMOVE_FLOW,
    payload: {
      id: '02'
    }
  })
  const after = [
    {
      id: '01',
      text: 'Inicio',
      type: 'rectangle',
      direction: 'down',
      x: '10',
      y: '10'
    }
  ]
  expect(flow(before, action)).to.be.deep.equal(after)
})
