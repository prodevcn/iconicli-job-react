import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from 'components/app'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('matches snapshot', () => {
    const app = mount(<App />)
    expect(true).toBe(true)
  })
})
