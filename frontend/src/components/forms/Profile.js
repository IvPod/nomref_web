import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
  setError,
  remove,
  update,
} from '../../features/users/usersSlice'

const Profile = ({ open, handleClose }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    password2: '',
  })

  useEffect(() => {
    setFormData({
      name: user.name,
      address: user.location
        ? user.location.formattedAddress
        : '',
      email: user.email,
      password: '',
      password2: '',
    })
  }, [user])

  const name = formData.name || ''
  const address = formData.address || ''
  const email = formData.email || ''
  const password = formData.password || ''
  const password2 = formData.password2 || ''

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  const onSubmit = async (e) => {
    if (name.length === 0) {
      dispatch(setError('Введите имя'))
    } else if (address.length === 0) {
      dispatch(setError('Введите адрес'))
    } else if (
      password.length > 1 &&
      (password.length < 6 || password !== password2)
    ) {
      dispatch(setError('Ошибка в пароле'))
    } else {
      let sendData = { name, address }
      if (password.length > 1) {
        Object.assign(sendData, { password })
      }
      dispatch(update(sendData))
      handleClose()
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Изменение профиля пользователя
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Имя"
          type="text"
          value={name}
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          disabled
          value={email}
          error={!/.+@.+\..+/.test(email)}
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="dense"
          id="address"
          label="Адрес"
          type="text"
          value={address}
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="dense"
          id="password"
          label="Пароль"
          type="password"
          fullWidth
          value={password}
          error={password.length < 6}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="dense"
          id="password2"
          label="Повторите пароль"
          type="password"
          fullWidth
          value={password2}
          error={password2 !== password}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Назад
        </Button>
        <Button onClick={onSubmit} color="primary">
          Сохранить
        </Button>
      </DialogActions>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(remove())
          handleClose()
        }}
        style={{ margin: '12px' }}
      >
        Удалить профиль
      </Button>
    </Dialog>
  )
}

export default Profile
