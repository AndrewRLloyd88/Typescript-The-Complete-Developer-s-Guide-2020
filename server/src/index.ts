import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <div><h1>Hi There</h1></div>`)
})

app.listen(1793, () => {
  console.log('listening on port 1793')
})
