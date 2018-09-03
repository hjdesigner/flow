'use strict'
import React from 'react'
import styled from 'styled-components'

export const Button = (props) => (
  <ElementButton primary>{props.text}</ElementButton>
)
export const ButtonSave = (props) => (
  <ElementButtonSave onClick={props.handleSave}>{props.text}</ElementButtonSave>
)
export const ButtonImage = (props) => (
  <ElementButtonImage onClick={props.handleImage}>{props.text}</ElementButtonImage>
)

const ElementButton = styled.button`
  width: ${props => props.primary ? '100%' : '48%'};
  height: 40px;
  display: inline-block;
  border: 0;
  margin-top: 10px;
  cursor: pointer;
  background-color: #99c432;
  border-radius: 5px;
  font-size: 1.3em;
  color: #FFF;
  transition: all .25s ease-in-out;
  &:hover {
    background-color: #7a9c26;
  }
`
const ElementButtonSave = styled(ElementButton)`
  background-color: #82ab20;
  font-size: 1em;
  &:hover {
    background-color: #6b8e19;
  }
`
const ElementButtonImage = styled(ElementButton)`
  background-color: #00c4cc;
  font-size: 1em;
  &:hover {
    background-color: #079aa0;
  }
`
