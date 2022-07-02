let players=require('C:/Users/Sasha/Documents/API node/API_NBAplayers/db/players')

module.exports=(app)=>{
    app.get('/players/:rings', (req,res) => {
        const rings=parseInt(req.params.rings)
        res.json(players.filter(player=> player.rings === rings)) 
    })
}