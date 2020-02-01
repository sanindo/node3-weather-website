const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2818f2f7475b125138c3d40e15b8130c/'+latitude+','+longitude+'?units=si'

    request({ url, json:true}, (error, { body }) => {
        if (error) {
            callback('Please make sure you have an internet connection!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast 