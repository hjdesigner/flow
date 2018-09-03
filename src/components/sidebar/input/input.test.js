import 'raf/polyfill'
import React from 'react'
import Input from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Input />', () => {
  it('Should wrapper return one Input', () => {
    const wrapper = shallow(<Input name='teste' id='teste' />).dive()
    expect(wrapper.find('input')).to.have.length(1)
  })
  it('Should return the component with the equal ID passed by prop', () => {
    const wrapper = shallow(<Input name='teste' id='teste' />).dive()
    expect(wrapper.props().id).to.equal('teste')
  })
  it('Should return the component with the equal name passed by prop', () => {
    const wrapper = shallow(<Input name='lastname' id='teste' />).dive()
    expect(wrapper.props().name).to.equal('lastname')
  })
  it('Should return the component with the NAME equal text if it does not pass the NAME', () => {
    const wrapper = shallow(<Input id='teste' />).dive()
    expect(wrapper.props().name).to.equal('text')
  })
  it('Should return the component with the ID equal text if it does not pass the ID', () => {
    const wrapper = shallow(<Input />).dive()
    expect(wrapper.props().id).to.equal('text')
  })
})
