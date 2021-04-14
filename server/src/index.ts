import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'
import './controllers/LoginController'
import './controllers/RootController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['ldjishfsaf'] }))
app.use(AppRouter.getInstance())

app.listen(1793, () => {
  console.log('listening on port 1793')
})
