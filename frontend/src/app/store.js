import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import stationsReducer from '../features/stations/stationsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    stations: stationsReducer,
  },
})
