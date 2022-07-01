let players=require('C:/Users/Sasha/Documents/API node/API_NBAplayers/db/players')

module.exports=(app)=>{
    app.get('/players/', (req,res) => {
       res.json(players) 
    })
}
       

