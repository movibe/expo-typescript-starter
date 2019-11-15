import { useState, useEffect } from 'react'
import { firebase } from 'server'
import { AsyncStorage } from 'react-native'

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated]: [
    undefined | Boolean,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState(undefined)

  const getToken = async (user: firebase.User) => {
    const token = user ? await user.getIdToken(true) : undefined
    return token
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const token: any = await getToken(user)
        if (token) {
          await AsyncStorage.setItem('token', token)
        }
      } else {
        await AsyncStorage.removeItem('token')
      }
      console.log(user)
      setIsAuthenticated(user ? true : false)
    })
  }, [])

  return isAuthenticated
}
