import { useSelector, useDispatch } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

import { setStation as setViewStation } from '../features/stations/stationsSlice'

const StationsList = ({ setStation }) => {
  const dispatch = useDispatch()
  const stations = useSelector(
    (state) => state.stations.stations
  )
  const authUser = useSelector((state) => state.users.user)
  return (
    <List
      dense
      style={{ overflow: 'auto', marginTop: '8px' }}
    >
      {stations.map((station) => (
        <ListItem
          key={station._id}
          onClick={() => dispatch(setViewStation(station))}
        >
          <ListItemText
            secondaryTypographyProps={{ noWrap: true }}
            primary={station.name}
            secondary={station.location.formattedAddress}
          />
          <ListItemSecondaryAction>
            {authUser && authUser._id === station.user ? (
              <IconButton
                onClick={() => setStation(station)}
                edge="end"
              >
                <EditIcon />
              </IconButton>
            ) : null}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default StationsList
