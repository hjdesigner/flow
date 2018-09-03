import 'raf/polyfill'
import React from 'react'
import LabelRadio from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<LabelRadio />', () => {
  it('Should wrapper return one Label', () => {
    const wrapper = shallow(<LabelRadio for='left' text='Esquerda' />).dive()
    expect(wrapper.find('label')).to.have.length(1)
  })
  it('Should return the component with the equal for passed by prop', () => {
    const wrapper = shallow(<LabelRadio for='left' text='Esquerda' />).dive()
    expect(wrapper.props().htmlFor).to.equal('left')
  })
  it('Should return the component with the equal Text passed by prop', () => {
    const wrapper = shallow(<LabelRadio for='left' text='Esquerda' />).dive()
    expect(wrapper.text()).to.equal('Esquerda')
  })
  it('Should return the component with the for equal text if it does not pass the for', () => {
    const wrapper = shallow(<LabelRadio text='Esquerda' />).dive()
    expect(wrapper.props().htmlFor).to.equal('label')
  })
  it('Should return the component with the Text equal text if it does not pass the Text', () => {
    const wrapper = shallow(<LabelRadio />).dive()
    expect(wrapper.text()).to.equal('label')
  })
})
