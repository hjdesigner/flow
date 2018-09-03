'use strict'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { FlowItem } from './index'

const stories = storiesOf('Flow Item Components Drag and Drop', module)

const itemsRectangle = [
  {
    id: '01',
    text: 'APP',
    type: 'rectangle',
    direction: 'down',
    x: 0,
    y: 0
  },
  {
    id: '02',
    text: 'APP',
    type: 'rectangle',
    direction: 'up',
    x: 250,
    y: 100
  },
  {
    id: '03',
    text: 'APP',
    type: 'rectangle',
    direction: 'left',
    x: 600,
    y: 100
  },
  {
    id: '04',
    text: 'APP',
    type: 'rectangle',
    direction: 'right',
    x: 600,
    y: 300
  },
  {
    id: '05',
    text: 'APP',
    type: 'rectangle',
    direction: 'none',
    x: 50,
    y: 300
  }
]

const itemsSquare = [
  {
    id: '01',
    text: 'APP',
    type: 'square',
    direction: 'down',
    x: 0,
    y: 0
  },
  {
    id: '02',
    text: 'APP',
    type: 'square',
    direction: 'up',
    x: 250,
    y: 100
  },
  {
    id: '03',
    text: 'APP',
    type: 'square',
    direction: 'left',
    x: 600,
    y: 100
  },
  {
    id: '04',
    text: 'APP',
    type: 'square',
    direction: 'right',
    x: 600,
    y: 300
  },
  {
    id: '05',
    text: 'APP',
    type: 'square',
    direction: 'none',
    x: 50,
    y: 300
  }
]
const itemsBall = [
  {
    id: '01',
    text: 'APP',
    type: 'ball',
    direction: 'down',
    x: 0,
    y: 0
  },
  {
    id: '02',
    text: 'APP',
    type: 'ball',
    direction: 'up',
    x: 250,
    y: 100
  },
  {
    id: '03',
    text: 'APP',
    type: 'ball',
    direction: 'left',
    x: 600,
    y: 100
  },
  {
    id: '04',
    text: 'APP',
    type: 'ball',
    direction: 'right',
    x: 600,
    y: 300
  },
  {
    id: '05',
    text: 'APP',
    type: 'ball',
    direction: 'none',
    x: 50,
    y: 300
  }
]
const itemsDiamond = [
  {
    id: '01',
    text: 'APP',
    type: 'diamond',
    direction: 'down',
    x: 0,
    y: 0
  },
  {
    id: '02',
    text: 'APP',
    type: 'diamond',
    direction: 'up',
    x: 250,
    y: 100
  },
  {
    id: '03',
    text: 'APP',
    type: 'diamond',
    direction: 'left',
    x: 600,
    y: 100
  },
  {
    id: '04',
    text: 'APP',
    type: 'diamond',
    direction: 'right',
    x: 600,
    y: 300
  },
  {
    id: '05',
    text: 'APP',
    type: 'diamond',
    direction: 'none',
    x: 50,
    y: 300
  }
]
const itemsTriangle = [
  {
    id: '01',
    text: 'APP',
    type: 'triangle',
    direction: 'down',
    x: 0,
    y: 0
  },
  {
    id: '02',
    text: 'APP',
    type: 'triangle',
    direction: 'up',
    x: 250,
    y: 100
  },
  {
    id: '03',
    text: 'APP',
    type: 'triangle',
    direction: 'left',
    x: 600,
    y: 100
  },
  {
    id: '04',
    text: 'APP',
    type: 'triangle',
    direction: 'right',
    x: 600,
    y: 300
  },
  {
    id: '05',
    text: 'APP',
    type: 'triangle',
    direction: 'none',
    x: 50,
    y: 300
  }
]
const itemsDecision = [
  {
    id: '01',
    text: 'APP',
    type: 'decision',
    direction: 'down',
    x: 0,
    y: 0
  }
]
stories.add('Flow Rectangle', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsRectangle} handleRemove={action('handleRemove')} />
  </div>
))
stories.add('Flow Square', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsSquare} handleRemove={action('handleRemove')} />
  </div>
))
stories.add('Flow Ball', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsBall} handleRemove={action('handleRemove')} />
  </div>
))
stories.add('Flow Diamond', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsDiamond} handleRemove={action('handleRemove')} />
  </div>
))
stories.add('Flow Triangle', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsTriangle} handleRemove={action('handleRemove')} />
  </div>
))
stories.add('Flow Decision', () => (
  <div style={{ background: '#3f4652', padding: 20, width: '100%', height: '100vw' }}>
    <FlowItem items={itemsDecision} handleRemove={action('handleRemove')} />
  </div>
))
