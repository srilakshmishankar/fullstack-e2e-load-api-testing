import { v4 } from 'uuid'

export default function createSessionStore({ db }) {
  return {
    createTimer(sessionInput) {
      const id = v4()
      if (sessionInput.id) {
        id = sessionInput.id
      }
      db.set(id, sessionInput)
      return db.get(id)
    },

    listTimers() {
      return db.list()
    },
  }
}
