import { useEffect } from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue'

import Main from './components/Main'
import setAuthToken from './app/setAuthToken'
import store from './app/store'
import { loadUser } from './features/users/usersSlice'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  })
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
