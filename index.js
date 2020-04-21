const config = require('config')
const fcmNotification = require('./fcm')
let [device, message] = process.argv.slice(2);


device = device || config.device
message = message || 'Hola Mundo!'

if (!device) {
  console.error('🚨 Missing device')
  process.exit(1)
}

console.log('Sending FCM to device', device)

return fcmNotification(device, message)
  .then(res => console.log('FCM Success'))
  .catch(err => console.log('FCM Failed', err))
