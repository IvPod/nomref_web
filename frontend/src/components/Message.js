import { useSelector, useDispatch } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import { setError } from '../features/users/usersSlice'

const Message = () => {
  const dispatch = useDispatch()
  const userError = useSelector(
    (state) => state.users.error
  )
  const handleCloseAlert = () => {
    dispatch(setError(null))
  }
  return (
    <Snackbar
      open={userError !== null}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <Alert
        onClose={handleCloseAlert}
        variant="filled"
        severity="error"
      >
        {userError}
      </Alert>
    </Snackbar>
  )
}

export default Message
