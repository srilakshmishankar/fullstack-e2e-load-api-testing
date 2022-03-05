import express from 'express'

export default function createRouter({ sessionStore }) {
  const router = express.Router()

  router.post('/', (req, res) => {
    const timerInput = req.body
    const timer = sessionStore.createTimer(timerInput)
    return res.send({ timer })
  })

  router.get('/', (req, res) => {
    const timers = sessionStore.listTimers()
    return res.send(timers)
  })

  return router
}
