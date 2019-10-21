import React from 'react'
import renderer from 'react-test-renderer'
import 'react-native'
import { RegisterScreen } from '../'

it('renders correctly', () => {
  const tree = renderer.create(<RegisterScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
