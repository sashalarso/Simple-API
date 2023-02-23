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
require('./endpoints/createplayers')(app)
require('./endpoints/updateplayers')(app)
require('./endpoints/deleteplayers')(app)






app.listen(port, () => console.log(`Appli démarée sur : http://localhost:${port}`))