import { createSlice } from '@reduxjs/toolkit'
import {
  loadUser as loadUserAPI,
  login as loginAPI,
  register as registerAPI,
  uploadPhoto as uploadPhotoAPI,
  update as updateAPI,
  remove as removeAPI,
} from './usersAPI'
import setAuthToken from '../../app/setAuthToken'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    loggedOut: (state) => {
      state.isAuthenticated = false
      state.loading = false
      state.user = {}
    },
    loading: (state, action) => {
      state.loading = true
    },
    loaded: (state, action) => {
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  loggedIn,
  loggedOut,
  loading,
  loaded,
  setError,
} = usersSlice.actions

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(loading())
    const res = await loginAPI(formData)
    localStorage.setItem('token', res.data.token)
    setAuthToken(res.data.token)
    dispatch(loggedIn({ ...res.data }))
  } catch (err) {
    dispatch(loggedOut())
    dispatch(setError(err.message))
  }
}

export const loadUser = () => async (dispatch) => {
  try {
    const data = await loadUserAPI()
    if (data) {
      dispatch(loggedIn(data))
    }
  } catch (err) {
    console.log(err.message)
  }
}

export const logoutUser = () => async (dispatch) => {
  try {
    delete localStorage.token
    setAuthToken()
    dispatch(loggedOut())
  } catch (err) {
    console.log(err.message)
  }
}

export const register = (formData) => async (dispatch) => {
  try {
    dispatch(loading())
    const res = await registerAPI(formData)
    localStorage.setItem('token', res.data.token)
    setAuthToken(res.data.token)
    dispatch(loggedIn({ ...res.data }))
  } catch (err) {
    dispatch(loggedOut())
    dispatch(setError(err.message))
  }
}

export const uploadPhoto = (photo) => async (dispatch) => {
  try {
    dispatch(loading())
    const res = await uploadPhotoAPI(photo)
    dispatch(loggedIn({ ...res.data }))
  } catch (err) {
    dispatch(loaded())
    dispatch(setError(err.message))
  }
}

export const update = (formData) => async (dispatch) => {
  try {
    dispatch(loading())
    const res = await updateAPI(formData)
    dispatch(loggedIn({ ...res.data }))
  } catch (err) {
    dispatch(loaded())
    dispatch(setError(err.message))
  }
}

export const remove = () => async (dispatch) => {
  try {
    dispatch(loading())
    await removeAPI()
    delete localStorage.token
    setAuthToken()
    dispatch(loggedOut())
  } catch (err) {
    dispatch(loaded())
    dispatch(setError(err.message))
  }
}

export const selectUser = (state) => state.user

export default usersSlice.reducer
