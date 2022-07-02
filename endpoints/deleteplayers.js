const { NBAplayer } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/players/:id', (req, res) => {
    
    NBAplayer.destroy({where : {id : NBAplayer.id}})
      .then(player => {
        const message = `Le joueur ${req.body.name} a bien été supprimé.`
        res.json({ message, data: player })
      })
  })
}