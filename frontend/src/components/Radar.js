import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Slider from '@material-ui/core/Slider'

const Radar = ({ radar, setRadar }) => {
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    setRadius(radar)
  }, [])

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control">
        <Card>
          <CardContent
            style={{
              width: 200,
              margin: 8,
              paddingTop: 12,
              paddingBottom: 0,
            }}
          >
            Радиус: {radius} км.
            <Slider
              value={radius}
              marks
              min={0}
              max={150}
              step={5}
              valueLabelDisplay="auto"
              onChange={(event, newValue) =>
                setRadius(newValue)
              }
              onChangeCommitted={(event, newValue) => {
                setRadar(newValue)
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Radar
