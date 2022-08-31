//importar o pacote express
const express = require('express')

//executar o express aplication
const app = express ()

//configurar a porta remota e local
const porta = process.env.PORT || 3000

//definir o express com o URLENCODED
app.use(express.urlencoded({extended:false}))

//importar o pacote consigh
const consign = require('consign')

//executar e configurar o consign
consign().include('./routes').into(app)

//definir a pasta dos assests (css, images, js)
app.use(express.static('./src/'))

//definir os conteúdos com acesso externo
module.exports = {app,porta}