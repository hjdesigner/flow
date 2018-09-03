'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Select = (props) => (
  <ElementSelect type='select' id={props.textId} name={props.textId}>
    {props.children}
  </ElementSelect>
)
Select.defaultProps = {
  textId: 'select'
}

Select.propTypes = {
  textId: PropTypes.string.isRequired
}
const ElementSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 0;
  margin-bottom: 10px;
  background-color: #FFF;
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
`
export default Select
