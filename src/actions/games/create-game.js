import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
export const GAME_CREATED = 'GAME_CREATED'
import { history } from '../../store'

export default function createGame(newGame) {
  return (dispatch) => {
    console.log(newGame)
    api.app.authenticate()
    .then(() => {
      games.create(newGame)
        .then((response) => {
          console.log(response);
          history.push(`/games/${response._id}`)
        }).catch((error) => {
          console.error('Error registering!', error);
        })
      }).catch((error) => {
        console.error(error)
    })
  }
  return {
    type: GAME_CREATED
  }
}
