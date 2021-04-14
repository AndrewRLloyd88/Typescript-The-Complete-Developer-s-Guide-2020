//singleton class so that we only have one router inside of our application
import express from 'express'

export class AppRouter {
  private static instance: express.Router

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router()
    }

    return AppRouter.instance
  }
}
