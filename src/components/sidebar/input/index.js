'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = (props) => (
  <ElementInput type='text' id={props.id} name={props.name} />
)

Input.defaultProps = {
  name: 'text',
  id: 'text'
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const ElementInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  background-color: #FFF;
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
`

export default Input
