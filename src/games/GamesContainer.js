// src/games/GamesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import Title from '../components/Title'
import GameItem from './GameItem'
import './GamesContainer.sass'
import CreateGame from './CreateGame'

export class GamesContainer extends PureComponent {

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  render() {
    return(
      <div>
        <header>
          <Title content="All Games" />
        </header>

        <main className="container">
          { this.props.games.map(this.renderGame.bind(this)) }
        </main>
        <footer>
          <CreateGame />
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService
})(GamesContainer)
