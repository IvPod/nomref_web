import axios from 'axios'

export const loadUser = async () => {
  try {
    const res = await axios.get('/api/users/myProfile')
    return res.data
  } catch (err) {
    return
  }
}

export const login = async (formData) => {
  try {
    const { data } = await axios.post(
      '/api/users/login',
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

export const register = async (formData) => {
  try {
    const { data } = await axios.post(
      '/api/users',
      formData
    )
    if (!data.success) {
      throw Error('Ошибка в данных')
    }
    return data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const uploadPhoto = async (photo) => {
  const formData = new FormData()
  formData.append('file', photo)
  try {
    const { data } = await axios.put(
      '/api/users/photo',
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

export const update = async (formData) => {
  try {
    const { data } = await axios.put(
      '/api/users/myProfile',
      formData
    )
    if (!data.success) {
      throw Error('Ошибка в данных')
    }
    return data
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}

export const remove = async () => {
  try {
    const { data } = await axios.delete(
      '/api/users/myProfile'
    )
    if (!data.success) {
      throw Error('Ошибка удаления профиля')
    }
    return {}
  } catch (err) {
    throw Error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    )
  }
}
