'use strict'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Message = ({ status }) => (
  <MessageContainer>
    {status.status === true && <Text>Salvo com sucesso!</Text>}
  </MessageContainer>
)

const MessageContainer = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;  
`
const Text = styled.p`
  background-color: #99c432;
  padding: 5px 15px;
  margin: 0;
  color: #000;
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
`
const mapStateProps = (state) => ({
  status: state.save
})

export default connect(mapStateProps)(Message)
