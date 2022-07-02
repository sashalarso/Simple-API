const {NBAplayer} =require('../db/sequelize')

module.exports=(app)=>{
    app.get('/players', (req,res) => {
        NBAplayer.findAll({order : ['name']}).then(
            player=> {
                const message = 'Voici la liste des joueurs'
                return res.json({message, data : player})
            }
        )
       
    })
}
       

