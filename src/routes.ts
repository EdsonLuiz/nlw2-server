import express, {Request, Response} from 'express'

import ClassesController from '@/controllers/ClassesController'
import ConnectionsController from '@/controllers/ConnectionsController'

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const routes = express.Router()


routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)

export default routes
