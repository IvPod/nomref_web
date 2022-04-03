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
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { login } from '../../features/users/usersSlice'

const Login = ({
  open,
  handleClose,
  switchLoginRegister,
}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  const onSubmit = async (e) => {
    dispatch(login(formData))
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Авторизация</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для входа в систему введите email и пароль
        </DialogContentText>
        <TextField
          autoFocus
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
          id="password"
          label="Пароль"
          type="password"
          fullWidth
          value={password}
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
          Вход
        </Button>
      </DialogActions>
      <Button
        variant="outlined"
        onClick={switchLoginRegister}
        style={{ margin: '12px' }}
      >
        Нет учетной записи? Зарегистрируйтесь
      </Button>
    </Dialog>
  )
}

export default Login
