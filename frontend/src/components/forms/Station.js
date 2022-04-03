import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import sensors from '../../app/sensorLabels'
import {
  saveStation,
  updateStation,
  removeStation,
} from '../../features/stations/stationsSlice'

const Station = ({ station, setStation }) => {
  const dispatch = useDispatch()
  const [stationForm, setStationForm] = useState({
    name: station.name,
    formattedAddress: station.location.formattedAddress,
  })

  const name = stationForm.name || ''
  const formattedAddress = stationForm.formattedAddress

  const handleChange = (e) =>
    setStationForm({
      ...stationForm,
      [e.target.id]: e.target.value,
    })

  const sensorCheck = { ...sensors }
  Object.keys(sensorCheck).forEach(
    (key) =>
      (sensorCheck[key] = station.sensors.includes(key))
  )
  const [stateCheck, setStateCheck] = useState(sensorCheck)
  const handleChangeCheck = (event) => {
    setStateCheck({
      ...stateCheck,
      [event.target.name]: event.target.checked,
    })
  }

  const onSave = () => {
    const newSensors = []
    Object.keys(stateCheck)
      .filter((sensor) => stateCheck[sensor])
      .forEach((sensor) => {
        newSensors.push(sensor)
      })
    if (station._id) {
      dispatch(
        updateStation({
          _id: station._id,
          name: name,
          location: {
            ...station.location,
            formattedAddress,
          },
          sensors: newSensors,
        })
      )
    } else {
      station.name = name
      station.location.formattedAddress = formattedAddress
      station.sensors = newSensors
      dispatch(saveStation(station))
    }
    setStation(null)
  }

  return (
    <Dialog
      open={station !== null}
      onClose={() => setStation(null)}
      fullWidth
    >
      <DialogTitle>
        {station && station._id
          ? 'Изменение параметров станции'
          : 'Добавление новой станции'}
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          autoFocus
          id="name"
          label="Имя"
          type="text"
          value={name}
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="address"
          label="Адрес"
          type="text"
          value={formattedAddress}
          fullWidth
          onChange={handleChange}
        />
        <FormGroup row>
          {Object.keys(stateCheck).map((sensor) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={stateCheck[sensor]}
                  onChange={handleChangeCheck}
                  name={sensor}
                  color="primary"
                />
              }
              key={sensor}
              label={sensors[sensor]}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setStation(null)}
          color="primary"
        >
          Назад
        </Button>
        <Button onClick={onSave} color="primary">
          Сохранить
        </Button>
      </DialogActions>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(removeStation(station._id))
          setStation(null)
        }}
        style={{ margin: '12px' }}
      >
        Удаление станции
      </Button>
    </Dialog>
  )
}

export default Station
