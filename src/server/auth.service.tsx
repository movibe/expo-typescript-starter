import * as React from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { client as store } from './index'
import { AsyncStorage } from 'react-native';
import * as queries from './queries'
import { Me } from './types'
// import { useSubscriptions } from './cache.service'

const MyContext = React.createContext(null)
export const useMe = () => useContext(MyContext)

interface ResponseAuth {
  token: string
  user: string
}

export const withAuth = (Component: React.ComponentType) => {
  const { user, token } = getAuthHeader()

  return props => {
    if (!token) return false


    // Validating against server
    const fetchUser = useQuery<Me.Query, Me.Variables>(queries.me, {
      suspend: true,
      context: {
        headers: {
          Authorization: token,
          'x-hasura-user-id': user,
          'x-hasura-role': 'mine'
        }
      }
    })

    const myResult = fetchUser.data.users ? fetchUser.data.users[0] : {};

    // useSubscriptions(myResult)

    return (
      <MyContext.Provider value={myResult}>
        <Component {...props} />
      </MyContext.Provider>
    )
  }
}

export const storeAuthHeader = async(auth: string, user: string) => {
  await AsyncStorage.setItem('Authorization', 'Bearer ' + auth)
  await AsyncStorage.setItem('user', user)
}

export const getAuthHeader = async():ResponseAuth | null => {
  return {
    token: AsyncStorage.getItem('Authorization'),
    user: AsyncStorage.getItem('user')
  } || null
}

export const signIn = async ({ username, password }) => {

  let res = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const resp: ResponseAuth = await res.json()

  if (res.status < 400) {
        storeAuthHeader(resp.token, resp.user);
  } else {
    return Promise.reject(res.statusText)
  }
}

export const signUp = async ({ username, password, name }) => {
  return fetch(`${process.env.REACT_APP_AUTH_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify({ name, username, password, confirmPassword: password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
}

export const signOut = async () => {
  await AsyncStorage.removeItem('Authorization')

  return store.clearStore()
}
