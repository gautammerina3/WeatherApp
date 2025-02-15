const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=aa262cabba8d03bdf2c135d2487fd378&query=" + longitude + "," + latitude + "&units=f"
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined)
    } else if (body.error) {
      callback("Unable to find location", undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions}. It is  currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees.`)
    }
  })
}

module.exports = forecast
