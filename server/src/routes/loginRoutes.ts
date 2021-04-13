import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }

  res.status(403)
  res.send('Not Permitted')
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
    res.redirect('/')
    //redirect to root route
  } else {
    res.send('Invalid Email or Password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
    <div>You are logged in</div>
    <a href="/logout">Log Out</a>
    </div>
    `)
  } else {
    res.send(`
    <div>
    <div>You are not logged in</div>
    <a href="/login">Log In</a>
    </div>
    `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, Logged in User!')
})

export { router }
