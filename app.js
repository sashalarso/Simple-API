const express=require('express')
const sequelize = require('./db/sequelize')
const bodyparser=require('body-parser')



const app= express()
const port=3000

app
    .use(bodyparser.json())

sequelize.initDb()

require('./endpoints/findplayers')(app)
require('./endpoints/findplayersbyid')(app)




app.listen(port, () => console.log(`Appli démarée sur : http://localhost:${port}`))