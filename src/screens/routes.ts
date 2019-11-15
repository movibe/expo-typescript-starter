import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Guest from './Guest/index.nav'
import Logged from './Logged/index.nav'
// Import screen here

export default createAppContainer(
  createSwitchNavigator({
    Guest
    // Logged
    // Insert screen here
  })
)
