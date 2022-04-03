import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import AddIcon from '@material-ui/icons/Add'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'

import {
  logoutUser,
  setError,
  uploadPhoto,
} from '../features/users/usersSlice'
import { searchAddress } from '../features/stations/stationsSlice'

import Login from './forms/Login'
import Register from './forms/Register'
import Profile from './forms/Profile'
import Message from './Message'
import StationsList from './StationsList'

const useStyles = makeStyles({
  root: {
    padding: '8px',
    width: '100%',
    maxWidth: 400,
  },
  centerLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolButton: {
    fontSize: '0.75rem',
  },
  inputLine: {
    padding: '8px',
  },
  divLine: {
    marginBottom: '8px',
  },
})

const Sidebar = ({
  open,
  toggleSidebar,
  adding,
  setAddMode,
  setStation,
  radar,
  setRadar,
}) => {
  const classes = useStyles()

  const isAuthenticated = useSelector(
    (state) => state.users.isAuthenticated
  )
  const userLoading = useSelector(
    (state) => state.users.loading
  )
  const userName = useSelector(
    (state) => state.users.user.name
  )
  const userAvatar = useSelector(
    (state) => state.users.user.image
  )

  const dispatch = useDispatch()

  const [openLogin, setOpenLogin] = React.useState(false)
  const handleClickLoginOpen = () => {
    setOpenLogin(true)
  }
  const handleLoginClose = () => {
    setOpenLogin(false)
  }

  const [openRegister, setOpenRegister] =
    React.useState(false)
  const handleRegisterClose = () => {
    setOpenRegister(false)
  }

  const switchLoginRegister = () => {
    setOpenLogin(!openLogin)
    setOpenRegister(!openRegister)
  }

  const [openProfile, setOpenProfile] =
    React.useState(false)
  const handleProfileClose = () => {
    setOpenProfile(false)
  }

  const [address, setAddress] = React.useState('')

  return (
    <>
      <Drawer
        anchor={'left'}
        open={open}
        variant="persistent"
        PaperProps={{ classes: { root: classes.root } }}
      >
        <div className={classes.centerLine}>
          <IconButton onClick={toggleSidebar}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          {isAuthenticated && (
            <Button variant="outlined">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files[0].size < 1000000) {
                    dispatch(uploadPhoto(e.target.files[0]))
                  } else {
                    dispatch(
                      setError(
                        'Выберите, пожалуйста, файл меньше 1Мб'
                      )
                    )
                  }
                }}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  component="span"
                  style={{ marginRight: '8px', padding: 0 }}
                >
                  {userAvatar ? (
                    <Avatar
                      alt={userName}
                      src={`/uploads/${userAvatar}?${new Date().getTime()}`}
                    />
                  ) : (
                    <AccountCircleIcon />
                  )}
                </IconButton>
              </label>
              <div onClick={() => setOpenProfile(true)}>
                {userName}
              </div>
              <Tooltip title="Выйти">
                <ExitToAppIcon
                  style={{ marginLeft: '8px' }}
                  onClick={() => {
                    dispatch(logoutUser())
                  }}
                />
              </Tooltip>
            </Button>
          )}
          {!isAuthenticated && (
            <Button
              variant="contained"
              color="default"
              startIcon={<ExitToAppIcon />}
              onClick={() => {
                handleClickLoginOpen()
              }}
            >
              Войти
            </Button>
          )}
          {userLoading && <LinearProgress />}
        </div>
        <Divider />
        <InputBase
          placeholder="Город, Область"
          autoFocus={true}
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                type="submit"
                onClick={() =>
                  dispatch(searchAddress(address))
                }
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          className={classes.inputLine}
        />
        <Divider className={classes.divLine} />
        <div className={classes.centerLine}>
          <Button
            variant="contained"
            color="default"
            onClick={() => setRadar(radar ? null : 10)}
            startIcon={<RadioButtonUncheckedIcon />}
            className={classes.toolButton}
          >
            {radar ? 'Выключить радар' : 'Радар'}
          </Button>
          <Button
            disabled={!isAuthenticated || adding}
            variant="contained"
            color="default"
            startIcon={<AddIcon />}
            className={classes.toolButton}
            onClick={() => setAddMode(true)}
          >
            Добавить станцию
          </Button>
        </div>
        <StationsList setStation={setStation} />
      </Drawer>
      <Login
        open={openLogin}
        handleClose={handleLoginClose}
        switchLoginRegister={switchLoginRegister}
      />
      <Register
        open={openRegister}
        handleClose={handleRegisterClose}
        switchLoginRegister={switchLoginRegister}
      />
      <Profile
        open={openProfile}
        handleClose={handleProfileClose}
      />
      <Message />
    </>
  )
}

export default Sidebar
