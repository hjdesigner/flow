import 'raf/polyfill'
import React from 'react'
import Select from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Select />', () => {
  it('Should wrapper return one Input', () => {
    const wrapper = shallow(
      <Select textId='elementSelect'>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
      </Select>
    ).dive()
    expect(wrapper.find('select')).to.have.length(1)
  })
  it('Should wrapper return one option', () => {
    const wrapper = shallow(
      <Select textId='elementSelect'>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
      </Select>
    ).dive()
    expect(wrapper.find('option')).to.have.length(1)
  })
  it('Should wrapper return two option', () => {
    const wrapper = shallow(
      <Select textId='elementSelect'>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
      </Select>
    ).dive()
    expect(wrapper.find('option')).to.have.length(2)
  })
  it('Should return the component with the equal ID passed by prop', () => {
    const wrapper = shallow(
      <Select textId='elementSelect'>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
      </Select>
    ).dive()
    expect(wrapper.props().id).to.equal('elementSelect')
  })
  it('Should return the component with the equal name passed by prop', () => {
    const wrapper = shallow(
      <Select textId='elementSelect'>
        <option class='sc-iRbamj dhphkj' value='square'>Quadrado</option>
      </Select>
    ).dive()
    expect(wrapper.props().name).to.equal('elementSelect')
  })
  it('Should return the component with the name equal text if it does not pass the name', () => {
    const wrapper = shallow(<Select />).dive()
    expect(wrapper.props().name).to.equal('select')
  })
  it('Should return the component with the ID equal text if it does not pass the ID', () => {
    const wrapper = shallow(<Select />).dive()
    expect(wrapper.props().id).to.equal('select')
  })
})
