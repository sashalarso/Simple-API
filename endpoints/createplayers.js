const { NBAplayer } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/players', (req, res) => {
    NBAplayer.create(req.body)
      .then(player => {
        const message = `Le joueur ${req.body.name} a bien été crée.`
        res.json({ message, data: player })
      })
  })
}