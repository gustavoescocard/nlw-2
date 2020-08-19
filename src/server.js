const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require("nunjucks")

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// recebe os dados do req.body
.use(express.urlencoded({extended:true}))
// configura arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5000)