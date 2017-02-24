import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'
import CreateRow from '../components/CreateRow'
import addRow from  '../actions/games/add-row-to-database'
import RowListItem from '../components/RowListItem'
import GameBoard from '../components/GameBoard'

export class GamePage extends PureComponent {
  static PropTypes = { }

  componentWillMount() {
    this.props.fetchGames()
  }

  createRowItem(peg1, peg2, peg3, peg4) {
    var pegArray = [peg1, peg2, peg3, peg4]
    this.props.rows.push({
      pegs: pegArray,
    })
    addRow(this.props)
  }

  render() {
  const { name, players, activeTurn } = this.props

  function displayPlayers(players, activeTurn) {
    if(players[0] !== undefined && players[1] !== undefined) {
      if(players[0]._id === activeTurn) {
        return (<h2> >> {players[0].name}<br/>{players[1].name}</h2>)
      } else if(players[1]._id === activeTurn) {
        return (<h2>{players[0].name}<br/> >> {players[1].name}</h2>)
      }

    } else if(players[0] !== undefined) {
      return (<h2>{players[0].name}</h2>)
    }
  }

    return(
      <div className="game page">
        <h1>{this.props.name} - </h1>
        {((this.props.players !== undefined) && displayPlayers(this.props.players, this.props.activeTurn))}
        {console.log(this.props)}
        <RowListItem rows={this.props.rows} />
        <CreateRow createRowItem={this.createRowItem.bind(this)} activeTurn={this.props.activeTurn} started={this.props.started} ended={this.props.ended} />
        <GameBoard/>
      </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames, addRow })(GamePage)
