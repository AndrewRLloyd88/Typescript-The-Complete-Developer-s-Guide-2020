import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
  <div>
  <label>Email</label>
  <input name="email"></input>
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password"></input>
  </div>
  <button>Submit</button>
  </form>`)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body
  if (
    email &&
    password &&
    email === 'andrew@andrew.com' &&
    password === 'password'
    //mark person as logged in
  ) {
    req.session = { loggedIn: true }
    //redirect to root route
  } else {
    res.redirect('/')
  }
})

export { router }
