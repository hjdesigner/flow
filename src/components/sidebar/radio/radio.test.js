import 'raf/polyfill'
import React from 'react'
import Radio from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Radio />', () => {
  it('Should wrapper return one Label', () => {
    const wrapper = shallow(<Radio id='right' name='direction' />).dive()
    expect(wrapper.find('input')).to.have.length(1)
  })
  it('Should return the component with the equal id passed by prop', () => {
    const wrapper = shallow(<Radio id='right' name='direction' />).dive()
    expect(wrapper.props().id).to.equal('right')
  })
  it('Should return the component with the equal value passed by prop id', () => {
    const wrapper = shallow(<Radio id='right' name='direction' />).dive()
    expect(wrapper.props().value).to.equal('right')
  })
  it('Should return the component with the equal name passed by prop', () => {
    const wrapper = shallow(<Radio id='right' name='direction' />).dive()
    expect(wrapper.props().name).to.equal('direction')
  })
  it('Should return the component with the id equal radio if it does not pass the id', () => {
    const wrapper = shallow(<Radio />).dive()
    expect(wrapper.props().id).to.equal('radio')
  })
  it('Should return the component with the value equal radio if it does not pass the value', () => {
    const wrapper = shallow(<Radio />).dive()
    expect(wrapper.props().value).to.equal('radio')
  })
  it('Should return the component with the name equal radio if it does not pass the name', () => {
    const wrapper = shallow(<Radio />).dive()
    expect(wrapper.props().name).to.equal('radio')
  })
})
