const config = require('config')
const FCM = require('fcm-node')
const { promisify } = require('util')


if (!config.serverKey) {
  console.error('🚨 Missing server key')
  process.exit(1)
}

const serverKey = config.serverKey

const fcm = new FCM(serverKey)

function sendNotification (token, title, cb) {
  const message = {
    to: token,
    notification: { title }
  }

  fcm.send(message, function(err, res){
    if (err) {
      return cb(err)
    }

    return cb(null, res)
  })
}

module.exports = promisify(sendNotification)
