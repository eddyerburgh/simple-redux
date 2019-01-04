import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

test('adds TODO when form is submitted', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('p').exists()).toBeFalsy()
  wrapper.find('input[type="text"]').instance().value = 'Test todo'
  wrapper.find('form').simulate('submit')
  expect(wrapper.find('p').text()).toContain('Test todo')
})
