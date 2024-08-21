import { configureStore, getDefaultMiddlewear } from '@reduxjs/toolkit'
import userSlice  from './user'
import tasksSlice  from './tasks'

export default configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice
  },
  middleware: getDefaultMiddlewear =>
    getDefaultMiddlewear({serializableCheck: false})
})