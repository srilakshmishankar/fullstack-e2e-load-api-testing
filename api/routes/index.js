import express from 'express'
import createSessionsRouter from './sessions'

export default function createRouter({ sessionStore }) {
  const router = express.Router()

  router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    return next()
  })

  const sessionsRouter = createSessionsRouter({ sessionStore })
  router.use('/sessions', sessionsRouter)

  return router
}
