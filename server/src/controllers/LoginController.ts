import { Request, Response, NextFunction } from 'express'
import { get, controller, bodyValidator, post } from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
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
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
