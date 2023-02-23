const { NBAplayer } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/players', (req, res) => {
    NBAplayer.update(req.body)
      .then(player => {
        const message = `Le joueur ${req.body.name} a bien été modifié.`
        res.json({ message, data: player })
      })
  })
}