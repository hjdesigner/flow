'use strict'
import React from 'react'
import styled from 'styled-components'
import FlowItem from './flowItem'
import Message from './message'

const FlowChats = () => (
  <FlowChatsContainer id='my-canvas'>
    <Message />
    <FlowItem />
  </FlowChatsContainer>
)

const FlowChatsContainer = styled.section`
  width: 70%;
  height: 100%;
  float: right;
`

export default FlowChats
