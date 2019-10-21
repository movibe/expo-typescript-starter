import React from 'react'
import renderer from 'react-test-renderer'
import 'react-native'
import { TermScreen } from '../'

it('renders correctly', () => {
  const tree = renderer.create(<TermScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
