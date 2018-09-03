import 'raf/polyfill'
import React from 'react'
import Label from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Label />', () => {
  it('Should wrapper return one Label', () => {
    const wrapper = shallow(<Label textFor='elementSelect' text='Escolha um elemento' />).dive()
    expect(wrapper.find('label')).to.have.length(1)
  })
  it('Should return the component with the equal textFor passed by prop', () => {
    const wrapper = shallow(<Label textFor='left' text='Esquerda' />).dive()
    expect(wrapper.props().htmlFor).to.equal('left')
  })
  it('Should return the component with the equal Text passed by prop', () => {
    const wrapper = shallow(<Label textFor='left' text='Esquerda' />).dive()
    expect(wrapper.text()).to.equal('Esquerda')
  })
  it('Should return the component with the textFor equal text if it does not pass the textFor', () => {
    const wrapper = shallow(<Label text='Esquerda' />).dive()
    expect(wrapper.props().htmlFor).to.equal('label')
  })
  it('Should return the component with the Text equal text if it does not pass the Text', () => {
    const wrapper = shallow(<Label />).dive()
    expect(wrapper.text()).to.equal('label')
  })
})
