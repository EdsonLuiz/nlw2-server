import express, {Request, Response} from 'express'

import ClassesController from '@/controllers/ClassesController'

const classesController = new ClassesController()
const routes = express.Router()


routes.post('/classes', classesController.create)

export default routes
