import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
export const GAME_UPDATED = 'GAME_UPDATED'


export default function playGame(row) {
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
        games.update(row, { guesses: row.guesses })
        .then(() => {
          console.log("Done")
        }).catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.error(error)
        // e.g. redirect to sign in!
      })

    return { type: GAME_UPDATED }
  }
}
