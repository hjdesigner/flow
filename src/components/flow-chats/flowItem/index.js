'use strict'
import React from 'react'
import Draggable from 'react-draggable'
import { connect } from 'react-redux'
import { removeFlow, changeFlow } from 'reducers/flow/actions-creators.js'
import styled from 'styled-components'
import imageRectangle from './images/rectangle.png'
import imageSquare from './images/square.png'
import imageBall from './images/ball.png'
import imageDiamond from './images/diamond.png'
import imageTriangle from './images/triangle.png'
import imageDecision from './images/decision.png'

export const FlowItem = ({ items, handleStop, handleRemove }) => (
  <div>
    {items.map((item, index) => (
      <Draggable
        defaultPosition={{x: parseInt(item.x), y: parseInt(item.y)}}
        onStop={handleStop}
        key={item.id}>
        <Element data-js={item.id} data-id={item.type} data-direction={item.direction}>
          <ElementDelete onClick={handleRemove(item.id)}>X</ElementDelete>
          {item.text}
        </Element>
      </Draggable>
    ))}
  </div>
)

const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  font-size: 1em;
  background-repeat: no-repeat;
  padding: 0 10px;
  background-size: 100%;
  position: absolute;
  &[data-id='rectangle'] {
    width: 200px;
    height: 84px;
    background-image: url(${imageRectangle})
  }
  &[data-id='square'] {
    width: 166px;
    height: 166px;
    background-image: url(${imageSquare})
  }
  &[data-id='ball'] {
    width: 170px;
    height: 170px;
    background-image: url(${imageBall})
  }
  &[data-id='diamond'] {
    width: 200px;
    height: 200px;
    background-image: url(${imageDiamond})
  }
  &[data-id='triangle'] {
    width: 200px;
    height: 133px;
    align-items: start;
    padding: 6px 30px;
    background-image: url(${imageTriangle});
    &[data-direction="left"] {
      &:after {
        width: 150px;
        left: -100px;
      }
    }
    &[data-direction="right"] {
      &:after {
        width: 150px;
        right: -100px;
      }
    }
  }
  &[data-id='decision'] {
    width: 496px;
    height: 200px;
    background-image: url(${imageDecision});
    &:after {
      display: none;
    }
  }
  &[data-direction='down'] {
    &:after {
      content: '';
      width: 2px;
      height: 100px;
      background-color: #000;
      position: absolute;
      bottom: -100px;
      left: calc(50% - 1px);
    }
  }
  &[data-direction='up'] {
    &:after {
      content: '';
      width: 2px;
      height: 100px;
      background-color: #000;
      position: absolute;
      top: -100px;
      left: calc(50% - 1px);
    }
  }
  &[data-direction='left'] {
    &:after {
      content: '';
      width: 100px;
      height: 2px;
      background-color: #000;
      position: absolute;
      left: -100px;
      top: calc(50% - 1px);
    }
  }
  &[data-direction='right'] {
    &:after {
      content: '';
      width: 100px;
      height: 2px;
      background-color: #000;
      position: absolute;
      right: -100px;
      top: calc(50% - 1px);
    }
  }
  &:hover {
    button {
      display: block;
    }
  }
`
const ElementDelete = styled.button`
  display: none;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: #FF5722;
  border: 0;
  color: #FFF;
  font-weight: bold;
  font-size: .7em;
  cursor: pointer;
`

const mapStateProps = (state) => ({
  items: state.flow
})

const mapDispatchToProps = (dispatch) => ({
  handleStop: (e, ui) => {
    const newValue = {
      id: e.target.getAttribute('data-js'),
      x: ui.x,
      y: ui.y
    }
    dispatch(changeFlow(newValue))
  },
  handleRemove: (id) => () => {
    dispatch(removeFlow(id))
  }
})

export default connect(mapStateProps, mapDispatchToProps)(FlowItem)
