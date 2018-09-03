'use strict'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addFlow } from 'reducers/flow/actions-creators.js'
import { injectGlobal } from 'styled-components'
import Sidebar from 'components/sidebar'
import FlowChats from 'components/flow-chats'

class App extends PureComponent {
  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('flowchats'))
    if (files) {
      this.props.handleAddFlow(files)
    }
  }
  render () {
    return (
      <div className='root'>
        <Sidebar />
        <FlowChats />
      </div>
    )
  }
}

injectGlobal`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body,
  html,
  [data-js='app'],
  .root {
    width: 100%;
    height: 100%;
  }
  body {
    background-color: #3f4652;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
`
const mapDispatchToProps = (dispatch) => ({
  handleAddFlow: (items) => {
    items.map((item) => {
      dispatch(addFlow(item))
    })
  }
})

export default connect(null, mapDispatchToProps)(App)
