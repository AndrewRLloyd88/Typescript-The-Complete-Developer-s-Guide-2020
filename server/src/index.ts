import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { router } from './routes/loginRoutes'

const app = express()

app.use(router)

app.listen(1793, () => {
  console.log('listening on port 1793')
})
