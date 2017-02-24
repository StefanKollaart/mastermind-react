import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createGame from '../actions/games/create-game'

class CreateGame extends PureComponent {
  constructor(props) {
    super()

    const { name, creator } = props

    this.state = {
      name,
      creator,
    }
  }

  updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  saveGame() {
    const {
      name,
    } = this.state

    const game = {
      name,
      creator: this.props.creator
    }

    this.props.createGame(game)
  }

  render() {
    if(this.props.creator != undefined) {
      return (
        <div className="editor">
          <input
            type="text"
            ref="name"
            className="name"
            placeholder="Name"
            defaultValue={this.state.name}
            onChange={this.updateName.bind(this)}
            onKeyDown={this.updateName.bind(this)} />

          <div className="actions">
            <button className="primary" onClick={this.saveGame.bind(this)}>Save</button>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = ( state ) => {
  return { creator: state.currentUser }
}

export default connect(mapStateToProps, { createGame })(CreateGame)
