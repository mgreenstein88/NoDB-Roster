const players = require('./existingPlayers.json')
let id = 1

module.exports = {
    existingList: (req, res) => {
        res.status(200).send(players)
    },
    newPlayers: (req, res) => {
        const {number, name, position, age} = req.body
        const newPlayer = {id, number, name, position, age}

        players.push(newPlayer)

        id++

        res.status(200).send(players)
    },
    editPlayerName: (req, res) => {
        const {players_id} = req.params
        const {newName} = req.body

        const index = players.findIndex(element => element.id === +players_id)
        if (index === -1){
            res.status(404).send("Not found")
        }
        players[index].name = newName

        res.status(200).send(players)
    },
    deletePlayer: (req, res) => {
        const { players_id } = req.params

        const index = players.findIndex((element) => element.id === +players_id)

        if (index === -1) {
            return res.status(404).send('Not found')
        }

        players.splice(index, 1)

        res.status(200).send(players)
    },
}