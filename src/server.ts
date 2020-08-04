import express from  'express'

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
  console.log(request.body)
  response.send('Eu funciono')
})

app.listen(3333, () => console.log('App is running'))
