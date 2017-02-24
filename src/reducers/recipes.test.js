import chai, { expect } from 'chai'
import { TOGGLE_LIKE } from '../actions/games/toggle-like'
import games, { dummyData } from './games'

describe('games reducer', () => {
  const initialState = games()
  const expectedState = []

  it('return an empty array for the initial state', () => {
    expect(initialState).to.eql(expectedState)
  })

  describe(TOGGLE_LIKE, () => {
    const initialGames = [
      {
        _id: '1234',
        liked: false
      },
      {
        _id: '1235',
        liked: true
      }
    ]

    const eventualGames = [
      {
        _id: '1234',
        liked: true
      },
      {
        _id: '1235',
        liked: true
      }
    ]

    const action = {
      type: TOGGLE_LIKE,
      payload: '1234'
    }

    const initialState = games(initialGames)

    it('toggles the liked prop on a game', () => {
      expect(initialState).to.eql(initialGames)
      expect(games(initialGames, action)).to.eql(eventualGames)
    })
  })
})
