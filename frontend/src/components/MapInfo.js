import { useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { Typography } from '@material-ui/core'

const MapInfo = ({ setAddMode, addNewStation }) => {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    click(e) {
      addNewStation(e.latlng)
      setAddMode(false)
    },
    mousemove(e) {
      setPosition(e.latlng)
    },
    mouseout(e) {
      setAddMode(false)
    },
  })

  return position === null ? null : (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
        >
          <AddIcon />
          <Typography variant="body2" noWrap>
            {position.lng.toFixed(4)},{' '}
            {position.lat.toFixed(4)}
          </Typography>
        </Fab>
      </div>
    </div>
  )
}

export default MapInfo
