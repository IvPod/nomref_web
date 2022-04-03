import NodeGeocoder from 'node-geocoder'

const options = {
  provider: process.env.GEOCODER_PROVIDER_YANDEX,
  apiKey: process.env.GEOCODER_API_KEY_YANDEX,
  formatter: null,
}

const geocoder = NodeGeocoder(options)

export default geocoder
