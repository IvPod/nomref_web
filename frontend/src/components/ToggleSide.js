import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const ToggleSide = ({ toggleSidebar }) => {
  return (
    <div className="leaflet-top leaflet-left">
      <div className="leaflet-control leaflet-bar">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
    </div>
  )
}

export default ToggleSide
