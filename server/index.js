const express = require('express')
const app = express()
const existingCtrl = require('./existingController')
const SERVER_PORT = 4171

app.use(express.json())

app.get('/api/players', existingCtrl.existingList)
app.post('/api/players', existingCtrl.newPlayers)
app.put('/api/players/:players_id', existingCtrl.editPlayerName)
app.delete('/api/players/:players_id', existingCtrl.deletePlayer)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))