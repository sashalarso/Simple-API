const express=require('express')
const sequelize = require('./db/sequelize')



const app= express()
const port=3000

sequelize.initDb()

require('./endpoints/findplayers')(app)
require('./endpoints/findplayersbyrings')(app)




app.listen(port, () => console.log(`Appli démarée sur : http://localhost:${port}`))