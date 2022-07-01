const express=require('express')


const app= express()
const port=3000



require('./endpoints/findplayers')(app)

app.listen(port, () => console.log(`Appli démarée sur : http://localhost:${port}`))