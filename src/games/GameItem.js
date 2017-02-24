import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import LikeButton from '../components/LikeButton'
import './GameItem.sass'
import joinGame from '../actions/games/join-game'

export class GameItem extends PureComponent {
  constructor(props) {
    super()

    const { _id, secondPlayer, name, creator } = props

    this.state = {
      _id,
      secondPlayer,
      name,
    }
  }

  joinGame() {
    const {
      _id,
      name,
    } = this.state

    const game = {
      _id,
      name,
      secondPlayer: this.props.secondPlayer,
    }

    this.props.joinGame(game)
  }

  playGame() {
    const {
      _id,
    } = this.state

    const game = {
      _id,
    }

}


  render() {

    const { _id, name, colorCode, rows, players, creator, secondPlayer } = this.props
    const { name: creator_name } = creator

    function renderPlay() {
      let canPlay;

      if(((secondPlayer == null) || (!players))) {
        canPlay = false
      } else if (players[0]._id == secondPlayer._id) {
        canPlay = true
      } else if(players[1] == undefined) {
        canPlay = false
      } else if(players[1]._id == secondPlayer._id) {
        canPlay = true
    }
    return canPlay;
  }

  function renderJoin() {
      let canJoin;

      if((secondPlayer == null) || (!players)) {
        canJoin = false;
      } else if(players[0]._id === (secondPlayer._id)) {
        canJoin = false;
      } else if (players[1] == undefined) {
        canJoin = true;
      } else {
        canJoin = false;
      }
    return canJoin
  }

  function renderPlayers() {
    let playingPlayers;

    if(players[0] && players[1]) {
      playingPlayers = (<ul><li>{players[0].name}</li><li>{players[1].name}</li></ul>)
    } else if(players[0]) {
      playingPlayers = (<ul><li>{players[0].name}</li></ul>)
    } else {
      playingPlayers = (<ul></ul>)
    }

    return playingPlayers;
  }

    return(
      <div>
      <article className="game">
        <header>
          <h1>{name} - by {creator_name}</h1>
        </header>
        <main>
        {(renderJoin() && <button onClick={this.joinGame.bind(this)}>Join</button>)}
        {renderPlay() && <Link to={`/games/${_id}`}><button>Play</button></Link>}
        {(players.length > 1) && <p>Game is full</p>}
        <p>Players: {players.length}/2</p>
        {renderPlayers()}
        </main>
        <footer>
        </footer>
      </article>
    </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { secondPlayer: state.currentUser }
}

export default connect(mapStateToProps, { joinGame })(GameItem)
