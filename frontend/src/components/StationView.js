import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'

import sensors from '../app/sensorLabels'
import { setStation } from '../features/stations/stationsSlice'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centerLine: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
  },
  iconSpace: {
    marginRight: '8px',
    flexWrap: 'wrap',
  },
  iconLine: {
    flexWrap: 'wrap',
  },
})

const StationView = () => {
  const classes = useStyles()

  const station = useSelector(
    (state) => state.stations.station
  )
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setStation(null))
  }
  return station ? (
    <Dialog onClose={handleClose} open={station !== null}>
      <DialogTitle>
        Состояние станции {station.name}
      </DialogTitle>
      <DialogContent>
        <div className={classes.centerLine}>
          <LocationOnOutlinedIcon
            className={classes.iconSpace}
          />
          {station.location.formattedAddress}
        </div>
        <div className={classes.centerLine}>
          <ExploreOutlinedIcon
            className={classes.iconSpace}
          />
          {station.location.coordinates.join()}
        </div>
        <div className={classes.centerLine}>
          <TrackChangesOutlinedIcon
            className={classes.iconSpace}
          />
          <span className={classes.iconLine}>
            {station.sensors.length > 0
              ? station.sensors.map((sensor) => (
                  <Chip
                    label={sensors[sensor]}
                    key={sensors[sensor]}
                    variant="outlined"
                    className={classes.iconSpace}
                  />
                ))
              : 'Отсутствует'}
          </span>
        </div>
        <div className={classes.centerLine}>
          <ScheduleOutlinedIcon
            className={classes.iconSpace}
          />{' '}
          Создана:{' '}
          {new Date(station.createdAt).toLocaleDateString()}
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          color="primary"
        >
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  ) : null
}

export default StationView
