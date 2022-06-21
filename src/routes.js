import { Router } from "express";
import auth from "./middlewares/auth";

import HelloController from "./controllers/helloController";
import SessionController from "./controllers/SessionController";
import UsersController from "./controllers/UsersController";
import ContatoController from "./controllers/ContatoController";

const routes = new Router()

routes.post('/sessions', SessionController.create)
routes.get('/', HelloController.index)

routes.use(auth)

routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users/', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.destroy) 


routes.get('/users/:user_id/contatos', ContatoController.index) 
routes.post('/users/:user_id/contatos', ContatoController.create)
routes.put('/users/:user_id/contatos/:id', ContatoController.update)
routes.delete('/users/:user_id/contatos/:id', ContatoController.destroy)

export default routes