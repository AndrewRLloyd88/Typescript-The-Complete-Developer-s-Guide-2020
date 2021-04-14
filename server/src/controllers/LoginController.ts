import { Request, Response, NextFunction } from 'express'
import { get, controller } from './decorators'

//useless middleware
// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log('Request was made!!!')
//   next()
// }

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
}
