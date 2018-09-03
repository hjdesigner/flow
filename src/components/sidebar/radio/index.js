'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Radio = (props) => (
  <RadioInput type='radio' value={props.id} id={props.id} name={props.name} />
)

Radio.defaultProps = {
  id: 'radio',
  name: 'radio'
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const RadioInput = styled.input`
  display: none;
  &:checked {
    & + label {
      &:before {
        background-color: #99c432;
      }
    }
  }
`

export default Radio
