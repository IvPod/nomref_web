import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import L, { circle } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Circle,
  useMapEvent,
} from 'react-leaflet'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import ToggleSide from './ToggleSide.js'
import Sidebar from './Sidebar.js'
import MapInfo from './MapInfo.js'
import Station from './forms/Station'
import Radar from './Radar.js'
import StationView from './StationView.js'

import { createStation } from '../features/stations/stationsAPI'
import {
  loading as stationLoading,
  loaded as stationLoaded,
  loadStationsRadius,
  loadStationsBox,
  setStation as setViewStation,
} from '../features/stations/stationsSlice'

const StationsRectangle = ({ radar }) => {
  const dispatch = useDispatch()
  const map = useMapEvent({
    moveend(e) {
      if (!radar) {
        loadStations(map.getBounds())
      }
    },
  })
  const loadStations = (bounds) => {
    dispatch(
      loadStationsBox(bounds._southWest, bounds._northEast)
    )
  }

  useEffect(() => {
    if (!radar) loadStations(map.getBounds())
  }, [radar])

  useEffect(() => {
    loadStations(map.getBounds())
  }, [])

  return null
}

const RadarCircle = ({ radar }) => {
  const dispatch = useDispatch()
  const circleRef = useRef()
  const [position, setPosition] = useState(null)

  const map = useMapEvent({
    moveend(e) {
      setPosition(map.getCenter())
    },
  })

  useEffect(() => {
    if (map) setPosition(map.getCenter())
  }, [map])
  useEffect(() => {
    if (circleRef.current) {
      map.fitBounds(circleRef.current.getBounds())
    }
  }, [radar, map])
  useEffect(() => {
    if (position) {
      dispatch(loadStationsRadius(position, radar))
    }
  }, [position])

  return position === null ? null : (
    <Circle
      center={position}
      radius={radar * 1000}
      fill={true}
      fillOpacity={0.1}
      opacity={0.9}
      ref={circleRef}
    />
  )
}

const Main = ({ center, zoom }) => {
  L.Icon.Default.imagePath = '/images/'

  const dispatch = useDispatch()
  const loading = useSelector(
    (state) => state.stations.loading
  )
  const location = useSelector(
    (state) => state.stations.location
  )
  const stations = useSelector(
    (state) => state.stations.stations
  )

  const [newStation, setNewStation] = useState(null)
  const addNewStation = async (latlng) => {
    dispatch(stationLoading())
    try {
      const newStation = await createStation(latlng)
      setNewStation(newStation)
      console.log(newStation)
    } catch {
      console.log('Не получается создать новую станцию!')
    }
    dispatch(stationLoaded())
  }

  const [addStation, setAddStation] = useState(false)
  const setAddMode = (mode) => {
    setAddStation(mode)
  }
  const [viewSidebar, setViewSidebar] = useState(false)
  const toggleSidebar = () => {
    setViewSidebar(!viewSidebar)
  }

  const [radar, setRadar] = useState(null)

  const [map, setMap] = useState(null)
  useEffect(() => {
    if (map) {
      map.setView(location, map.getZoom())
      setTimeout(function () {
        map.setZoom(map.getZoom())
      }, 500)
    }
  }, [location, map])

  return (
    <>
      <Backdrop
        open={loading}
        style={{ zIndex: 1201, color: '#fff' }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <StationView />

      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
        whenCreated={setMap}
        style={{ cursor: addStation ? 'crosshair' : '' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {radar && <RadarCircle radar={radar} />}
        <StationsRectangle radar={radar} />

        {stations.map((el) => (
          <Marker
            position={el.location.coordinates}
            key={el._id}
            eventHandlers={{
              click: () => {
                dispatch(setViewStation(el))
              },
            }}
          >
            <Tooltip>
              {el.name} <br /> {el.address}
            </Tooltip>
          </Marker>
        ))}
        {addStation ? (
          <MapInfo
            setAddMode={setAddMode}
            addNewStation={addNewStation}
          />
        ) : null}
      </MapContainer>

      {radar && <Radar radar={radar} setRadar={setRadar} />}
      <ToggleSide toggleSidebar={toggleSidebar} />
      <Sidebar
        open={viewSidebar}
        toggleSidebar={toggleSidebar}
        adding={addStation}
        setAddMode={setAddMode}
        setStation={setNewStation}
        radar={radar}
        setRadar={setRadar}
      />
      {newStation && (
        <Station
          station={newStation}
          setStation={setNewStation}
        />
      )}
    </>
  )
}

Main.defaultProps = {
  center: [59.889651, 29.87631],
  zoom: 10,
  stations: [],
}

export default Main
