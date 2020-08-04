import express, {Request, Response} from 'express'

const routes = express.Router()

routes.get('/', (request: Request, response: Response) => {
  response.send('Hiii')
})

export default routes
