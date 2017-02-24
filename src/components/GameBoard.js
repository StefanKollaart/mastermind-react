import _ from 'lodash'
import React, { PureComponent, PropTypes } from 'react'
import './GameBoard.sass'

class GameBoard extends PureComponent {

	renderItems() {
		return  _.map(this.props.rows, (row, index) =>
		<RowListItem key={index} {...row} />)
	}

	render(){
		return(
			<div>
				<br/>
				<br/>
				<h3>Pick a color</h3>
				<span>
					<p>1: <img src="http://i.imgur.com/M9KHeBi.png" width="50" height="50"/>
						2: <img src="https://i.imgur.com/9K6ENZq.png" width="50" height="50"/>
						3: <img src="https://i.imgur.com/UpZkXsF.png" width="50" height="50" />
						4: <img src="http://i.imgur.com/om3Suft.png" width="50" height="50"/>
						5: <img src="http://i.imgur.com/QOjponC.png" width="50" height="50" />
						6: <img src="http://i.imgur.com/jZqu12t.png" width="50" height="50" /></p>
				</span>
			</div>
		)

	}
}



export default GameBoard
