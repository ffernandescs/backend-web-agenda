"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _auth = require('./middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

var _helloController = require('./controllers/helloController'); var _helloController2 = _interopRequireDefault(_helloController);
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _UsersController = require('./controllers/UsersController'); var _UsersController2 = _interopRequireDefault(_UsersController);
var _ContatoController = require('./controllers/ContatoController'); var _ContatoController2 = _interopRequireDefault(_ContatoController);

const routes = new (0, _express.Router)()

routes.post('/sessions', _SessionController2.default.create)
routes.get('/', _helloController2.default.index)

//routes.use(auth)




routes.get('/users', _UsersController2.default.index)
routes.get('/users/:id', _UsersController2.default.show)
routes.post('/users/', _UsersController2.default.create)
routes.put('/users/:id', _UsersController2.default.update)
routes.delete('/users/:id', _UsersController2.default.destroy) 


routes.get('/users/:user_id/contatos', _ContatoController2.default.index) 
routes.post('/users/:user_id/contatos', _ContatoController2.default.create)
routes.put('/users/:user_id/contatos', _ContatoController2.default.destroy)
routes.put('/users/:user_id/contatos/:id', _ContatoController2.default.destroy)

exports. default = routes