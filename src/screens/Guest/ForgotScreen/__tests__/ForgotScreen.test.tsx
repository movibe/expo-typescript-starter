import React from 'react'
import renderer from 'react-test-renderer'
import 'react-native'
import { ForgotScreen } from '../'

it('renders correctly', () => {
  const tree = renderer.create(<ForgotScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
