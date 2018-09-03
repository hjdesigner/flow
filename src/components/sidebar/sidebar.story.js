
'use strict'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { injectGlobal } from 'styled-components'
import Select from './select'
import { Button, ButtonSave, ButtonImage } from './button'
import Input from './input'
import Label from './label'
import LabelRadio from './radioLabel'
import Radio from './radio'

const stories = storiesOf('Sidebar Components', module)

stories.add('Button Primary', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <Button text='Incluir' />
  </div>
))
stories.add('Button Save', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <ButtonSave text='Salvar' onClick={action('clicked')} />
  </div>
))
stories.add('Button Image', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <ButtonImage text='Gerar Imagem' onClick={action('clicked')} />
  </div>
))
stories.add('Select', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <Select textId='elementSelect'>
      <ElementOption value='square'>Quadrado</ElementOption>
      <ElementOption value='triangle'>Triângulo</ElementOption>
      <ElementOption value='rectangle'>Retângulo</ElementOption>
      <ElementOption value='diamond'>Losango</ElementOption>
      <ElementOption value='ball'>Bola</ElementOption>
      <ElementOption value='decision'>Decisão</ElementOption>
    </Select>
  </div>
))
stories.add('Input', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <Input id='textElement' name='textElement' style={{ boxSizing: 'border-box' }} />
  </div>
))
stories.add('Label', () => (
  <div style={{ background: '#272c33', padding: 20, width: '30%' }}>
    <Label textFor='elementSelect' text='Escolha um elemento' />
  </div>
))
stories.add('LabelRadio + Radio', () => (
  <div style={{ background: '#272c33', padding: 20, width: '40%' }}>
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
  </div>
))

const ElementFieldRadio = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`

const ElementOption = styled.option`
  font-size: 1em;
`
injectGlobal`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
