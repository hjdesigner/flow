'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelRadio = (props) => (
  <RadioLabel htmlFor={props.for}>{props.text}</RadioLabel>
)

LabelRadio.defaultProps = {
  for: 'label',
  text: 'label'
}

LabelRadio.propTypes = {
  for: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const RadioLabel = styled.label`
  color: #FFF;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: #FFF;
    border-radius: 3px;
    margin: 0 auto 5px;
  }
`

export default LabelRadio
