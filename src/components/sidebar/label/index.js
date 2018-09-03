'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = ({ textFor, text }) => (
  <ElementLabel htmlFor={textFor}>{text}</ElementLabel>
)

Label.defaultProps = {
  textFor: 'label',
  text: 'label'
}

Label.propTypes = {
  textFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const ElementLabel = styled.label`
  width: 100%;
  display: inline-block;
  color: #FFF;
  margin-bottom: 10px;
`

export default Label
