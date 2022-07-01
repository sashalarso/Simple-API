const { Sequelize, DataTypes } = require('sequelize')
const NBAPlayers = require('./players')
const NBAPlayersModel= require('../models/nbaplayers')
  
const sequelize = new Sequelize('NBA players', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const NBAplayer = NBAPlayersModel(sequelize, DataTypes)
  
const initDb = () => {
  return sequelize.sync({force:true}).then(_ => {
    NBAPlayers.map(player => {
      NBAplayer.create({
        name: player.name,
        rings: player.rings,
        position : player.position,
        teams: player.teams.join()
      }).then(player => console.log('Laffichage a bien été fait'))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, NBAplayer
}