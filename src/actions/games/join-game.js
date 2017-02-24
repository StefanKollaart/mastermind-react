import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
import { history } from '../../store'

export default function joinGame(game) {
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
        games.update(game, { secondPlayerId: game.secondPlayer })
        .then(() => {
          console.log("Done")
          history.push(`/games/${game._id}`)
        }).catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.error(error)
      })

    return { type: 'GAME_UPDATED' }
  }
}
