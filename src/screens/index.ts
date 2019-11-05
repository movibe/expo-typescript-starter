import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Guest from './Guest/index.nav'

// import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from '@react-navigation/web'

// import Logged from './Logged/index.nav'
// Import screen here

export default createBrowserApp(
  createSwitchNavigator({
    Guest
    // Logged
    // Insert screen here
  })
)
