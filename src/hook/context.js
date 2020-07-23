import React, { createContext, useReducer } from 'react'
import { withRouter } from 'react-router-dom'
import { usersReducer, GET_USERS, EDIT_STATUS_USERS, CLOSE_LOADER, OPEN_LOADER, loaderReducer } from '../hook'
import axios from 'axios'

const Axios = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' })
export const AppContext = createContext({})

export const Context = ({ children }) => {
  const [users, dispatchUsers] = useReducer(usersReducer, [])
  const [loader, dispatchLoader] = useReducer(loaderReducer, { status: false })

  const getData = async () => {
    dispatchLoader({ type: OPEN_LOADER })
    try {
      const response = await Axios.get()
      if (response.status === 200) {
        
        let mockUser = []
        response.data && response.data.length > 0 && response.data.map((item, i) => {
          let element = {
            ...item,
            status: false
          }
          mockUser.push(element)
        })
        dispatchUsers({ type: GET_USERS, users: mockUser })
        dispatchLoader({ type: CLOSE_LOADER })
        // return { status: 'success' }
      }
    }
    catch (e) {
      console.log(e)
      // return { status: 'fail' }
    }
  }

  const editStatusUsers = (id) => {
    let mockUsers = []
    users && users.length > 0 && users.map(user => {
      let element = {}

      if (user.id === id) {
        element = { ...user, status: !user.status }
      } else {
        element = { ...user, status: false }
      }

      mockUsers.push(element)
    })
    dispatchUsers({ type: EDIT_STATUS_USERS, users: mockUsers })
  }


  const hook = {
    users, getData, editStatusUsers, loader
  }

  return (
    <AppContext.Provider value={hook} >
      {children}
    </AppContext.Provider>
  )
}

export const Provider = withRouter(Context)
export const Consumer = AppContext.Consumer

