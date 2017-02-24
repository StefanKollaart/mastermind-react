import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


class CreateRow extends PureComponent {

	render(){
		let turnBasedAction;

		if((this.props.currentUser._id == this.props.activeTurn) && (this.props.started) && !(this.props.ended)) {
			turnBasedAction = (<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="number" placeholder="which color?" ref="submitPeg1" />
				<input type="number" placeholder="which color?" ref="submitPeg2" />
				<input type="number" placeholder="which colors?" ref="submitPeg3" />
				<input type="number" placeholder="which color?" ref="submitPeg4" />
				<button>Submit</button>
			</form>)
		} else if (this.props.started == false) {
			turnBasedAction = (<p>This game isn't full yet. Invite someone to play!</p>)
		} else if ((this.props.ended) && (this.props.currentUser._id == this.props.activeTurn)) {
			turnBasedAction = (<img src="https://s-media-cache-ak0.pinimg.com/originals/ba/ee/7d/baee7d789ce0a5724025683d7eb99ce1.png" width="300" height="300"/>)
		} else if ((this.props.ended) && !(this.props.currentUser._id == this.props.activeTurn)) {turnBasedAction = (<img src="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg" width="300" height="300"/>)
		} else {
			turnBasedAction = (<p>It's not your turn! Relax for a minute and grab a cup of coffee.</p>)
		}
		return(
			<div>
				{turnBasedAction}
			</div>
		)
	}

	handleSubmit(event) {
		event.preventDefault()
		const peg1 = parseInt(this.refs.submitPeg1.value)
		const peg2 = parseInt(this.refs.submitPeg2.value)
		const peg3 = parseInt(this.refs.submitPeg3.value)
		const peg4 = parseInt(this.refs.submitPeg4.value)
		this.props.createRowItem(peg1, peg2, peg3, peg4)
	}
}

const mapStateToProps = ( state ) => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(CreateRow)
