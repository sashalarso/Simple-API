let players=require('C:/Users/Sasha/Documents/API node/API_NBAplayers/db/players')

module.exports=(app)=>{
    app.get('/players/:id', (req,res) => {
        const rings=parseInt(req.params.id)
        res.json(players.find(player=> player.id === id)) 
    })
}