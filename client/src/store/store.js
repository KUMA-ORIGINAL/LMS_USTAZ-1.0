import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from './api/authApi'

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authApi.middleware),
})
// setupListeners(store.dispatch)

export default store
