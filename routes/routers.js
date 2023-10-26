const express = require('express')
const routers = express.Router()
const bodyParser = require('body-parser')
const controllers = require('../controllers/userContollers')

routers.use(bodyParser.json)

routers.get('/',controllers.get)
routers.get('/id',controllers.getByid)
routers.post('/',controllers.post)
routers.put('/:id',controllers.put)
routers.delete('/:id',controllers.delete)

module.exports=routers