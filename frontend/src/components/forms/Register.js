import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
  register,
  setError,
} from '../../features/users/usersSlice'

const Register = ({
  open,
  handleClose,
  switchLoginRegister,
}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    password2: '',
  })
  const { name, address, email, password, password2 } =
    formData

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
    } else {
      dispatch(register(formData))
      handleClose()
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Регистрация нового пользователя
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для регистрации необходимо ввести все поля
        </DialogContentText>
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
          Отказ
        </Button>
        <Button onClick={onSubmit} color="primary">
          Регистрация
        </Button>
      </DialogActions>
      <Button
        variant="outlined"
        onClick={switchLoginRegister}
        style={{ margin: '12px' }}
      >
        Нет учетной записи? Авторизация
      </Button>
    </Dialog>
  )
}

export default Register
