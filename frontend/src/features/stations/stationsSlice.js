import { createSlice } from '@reduxjs/toolkit'

import {
  searchAddress as searchAddressAPI,
  saveStation as saveStationAPI,
  loadStations as loadStationsAPI,
  updateStation as updateStationAPI,
  removeStation as removeStationAPI,
  loadStationsRadius as loadStationsRadiusAPI,
  loadStationsBox as loadStationsBoxAPI,
} from './stationsAPI'

export const stationsSlice = createSlice({
  name: 'stations',
  initialState: {
    location: [59.889651, 29.87631],
    loading: false,
    stations: [],
    station: null,
    error: '',
  },
  reducers: {
    loading: (state, action) => {
      state.loading = true
    },
    loaded: (state, action) => {
      state.loading = false
    },
    setLocation: (state, action) => {
      state.location = action.payload
      state.loading = false
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    created: (state, action) => {
      state.loading = false
      state.stations.push(action.payload)
    },
    stationsLoaded: (state, action) => {
      state.loading = false
      state.stations = action.payload
    },
    updated: (state, action) => {
      state.loading = false
      const index = state.stations.findIndex(
        (station) => station._id === action.payload._id
      )
      state.stations.splice(index, 1, action.payload)
    },
    removed: (state, action) => {
      state.loading = false
      state.stations = state.stations.filter(
        (station) => station._id !== action.payload
      )
    },
    setStation: (state, action) => {
      state.station = action.payload
    },
  },
})

export const {
  loading,
  loaded,
  setLocation,
  setError,
  created,
  stationsLoaded,
  updated,
  removed,
  setStation,
} = stationsSlice.actions

export const searchAddress =
  (address) => async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await searchAddressAPI(address)
      dispatch(
        setLocation([data[0].latitude, data[0].longitude])
      )
    } catch (err) {
      dispatch(loaded())
      dispatch(setError(err.message))
    }
  }

export const saveStation =
  (formData) => async (dispatch) => {
    try {
      dispatch(loading())
      const res = await saveStationAPI(formData)
      dispatch(created({ ...res.data }))
    } catch (err) {
      dispatch(setError(err.message))
      dispatch(loaded())
    }
  }

export const loadStations = () => async (dispatch) => {
  try {
    dispatch(loading())
    const res = await loadStationsAPI()
    dispatch(stationsLoaded(res.data))
  } catch (err) {
    dispatch(setError(err.message))
    dispatch(loaded())
  }
}

export const updateStation =
  (station) => async (dispatch) => {
    try {
      dispatch(loading())
      const res = await updateStationAPI(station)
      dispatch(updated({ ...res.data }))
    } catch (err) {
      dispatch(setError(err.message))
      dispatch(loaded())
    }
  }

export const removeStation =
  (stationId) => async (dispatch) => {
    try {
      dispatch(loading())
      await removeStationAPI(stationId)
      dispatch(removed(stationId))
    } catch (err) {
      dispatch(setError(err.message))
      dispatch(loaded())
    }
  }

export const loadStationsRadius =
  (center, radius) => async (dispatch) => {
    try {
      dispatch(loading())
      const res = await loadStationsRadiusAPI(
        center,
        radius
      )
      dispatch(stationsLoaded(res.data))
    } catch (err) {
      dispatch(setError(err.message))
      dispatch(loaded())
    }
  }

export const loadStationsBox =
  (bl, tr) => async (dispatch) => {
    try {
      dispatch(loading())
      const res = await loadStationsBoxAPI(bl, tr)
      dispatch(stationsLoaded(res.data))
    } catch (err) {
      dispatch(setError(err.message))
      dispatch(loaded())
    }
  }

export default stationsSlice.reducer
