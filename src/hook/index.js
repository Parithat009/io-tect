import { AppContext, Provider, Consumer } from './context'
import { GET_USERS, usersReducer, EDIT_STATUS_USERS } from './reducers/userReducer'
import { CLOSE_LOADER, OPEN_LOADER, loaderReducer } from './reducers/loaderReducer'

export {
  AppContext, Provider, Consumer,
  GET_USERS, EDIT_STATUS_USERS, usersReducer,
  CLOSE_LOADER, OPEN_LOADER, loaderReducer
}