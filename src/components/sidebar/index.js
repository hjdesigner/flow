'use strict'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import { addFlow } from 'reducers/flow/actions-creators.js'
import { toogleSave } from 'reducers/save/actions-creators.js'
import html2canvas from 'html2canvas'
import Label from './label'
import Select from './select'
import Radio from './radio'
import LabelRadio from './radioLabel'
import Input from './input'
import { Button, ButtonSave, ButtonImage } from './button'

const Sidebar = ({ handleAddFlow, handleSave, handleImage, flowItems }) => (
  <FlowElements>
    <TitleElement>Fluxograma</TitleElement>
    <ElementFields onSubmit={handleAddFlow}>
      <Label textFor='elementSelect' text='Escolha um elemento' />
      <Select textId='elementSelect'>
        <ElementOption value='square'>Quadrado</ElementOption>
        <ElementOption value='triangle'>Triângulo</ElementOption>
        <ElementOption value='rectangle'>Retângulo</ElementOption>
        <ElementOption value='diamond'>Losango</ElementOption>
        <ElementOption value='ball'>Bola</ElementOption>
        <ElementOption value='decision'>Decisão</ElementOption>
      </Select>
      <TextElement>Direção do Elemento</TextElement>
      <ElementFieldRadio>
        <Radio id='left' name='direction' />
        <LabelRadio for='left' text='Esquerda' />
        <Radio id='right' name='direction' />
        <LabelRadio for='right' text='Direita' />
        <Radio id='up' name='direction' />
        <LabelRadio for='up' text='Cima' />
        <Radio id='down' name='direction' />
        <LabelRadio for='down' text='Baixo' />
        <Radio id='none' name='direction' />
        <LabelRadio for='none' text='Nenhuma' />
      </ElementFieldRadio>
      <Label textFor='textElement' text='Digite o texto do elemento' />
      <Input id='textElement' name='textElement' />
      <Button text='Inserir' />
    </ElementFields>
    <Image>
      <ImageHtml src='' id='imageGenerator' />
    </Image>
    <ButtonsContainer>
      {flowItems.length > 0 && <ButtonSave text='Salvar' handleSave={handleSave(flowItems)} />}
      {flowItems.length > 0 && <ButtonImage text='Gerar Imagem' handleImage={handleImage} />}
    </ButtonsContainer>
  </FlowElements>
)

const FlowElements = styled.section`
  width: 30%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #272c33;
`
const TitleElement = styled.h1`
  width: 100%;
  display: inline-block;
  color: #00c4cc;
  font-weight: 600;
  font-size: 1.8em;
  margin-top: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`

const ElementFields = styled.form`
  padding: 0 20px;
  margin-top: 20px;
`
const ElementOption = styled.option`
  font-size: 1em;
`
const TextElement = styled.p`
  width: 100%;
  display: inline-block;
  margin-bottom: 15px;
  color: #FFF;
`
const ElementFieldRadio = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`
const Image = styled.div`
  width: 220px;
  height: 100px;
  display: inline-block;
  margin: 20px 0 0 calc(50% - 110px);
  img {
    width: 100%;
  }
`
const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`
const ImageHtml = styled.img``

const mapStateProps = (state) => ({
  flowItems: state.flow
})

const mapDispatchToProps = (dispatch) => ({
  handleAddFlow: (e) => {
    e.preventDefault()
    const valueItem = {
      id: v4(),
      text: e.target.textElement.value,
      type: e.target.elementSelect.value,
      direction: e.target.direction.value !== '' ? e.target.direction.value : 'none',
      x: '0',
      y: '0'
    }
    dispatch(addFlow(valueItem))
    const item = {
      status: false
    }
    dispatch(toogleSave(item))
  },
  handleSave: (items) => () => {
    localStorage.removeItem('flowchats')
    localStorage.setItem('flowchats', JSON.stringify(items))
    const item = {
      status: true
    }
    dispatch(toogleSave(item))
  },
  handleImage: () => {
    const item = {
      status: false
    }
    dispatch(toogleSave(item))
    html2canvas(document.querySelector('#my-canvas')).then(canvas => {
      const base64image = canvas.toDataURL('image/png')
      document.querySelector('#imageGenerator').src = base64image
    })
  }
})

export default connect(mapStateProps, mapDispatchToProps)(Sidebar)
