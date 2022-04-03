import axios from 'axios'

export const searchAddress = async (address) => {
  try {
    const { data } = await axios.get(
      `/api/stations/address/${address}`
    )
    return data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const createStation = async (latlng) => {
  try {
    const ll = latlng.lat + ',' + latlng.lng
    const res = await axios.get(
      `/api/stations/latlng/${ll}`
    )
    const newStation = {
      name: '',
      location: {
        type: 'Point',
        coordinates: [latlng.lat, latlng.lng],
        formattedAddress: res.data.data[0].formattedAddress,
      },
      sensors: [],
    }
    return newStation
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const saveStation = async (formData) => {
  try {
    const { data } = await axios.post(
      '/api/stations',
      formData
    )
    return data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const loadStations = async () => {
  try {
    const { data } = await axios.get('/api/stations')
    return data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const updateStation = async (station) => {
  const stationProfile = {
    name: station.name,
    location: station.location,
    sensors: station.sensors,
  }
  try {
    const res = await axios.put(
      `/api/stations/${station._id}`,
      stationProfile
    )
    return res.data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const removeStation = async (stationId) => {
  try {
    await axios.delete(`/api/stations/${stationId}`)
    return {}
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const loadStationsRadius = async (
  center,
  radius
) => {
  const ll = center.lat + ',' + center.lng
  try {
    const res = await axios.get(
      `/api/stations/radius/${ll}/${radius}`
    )
    return res.data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const loadStationsBox = async (bl, tr) => {
  const cbl = bl.lat + ',' + bl.lng
  const ctr = tr.lat + ',' + tr.lng
  try {
    const res = await axios.get(
      `/api/stations/box/${cbl}/${ctr}`
    )
    return res.data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}
