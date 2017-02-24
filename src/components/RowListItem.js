import React, { PureComponent, PropTypes } from 'react'

class RowListItem extends PureComponent {

render() {
  function pegImage(peg) {
    if(peg == 1) {
      return <img src="http://i.imgur.com/M9KHeBi.png" width="50" height="50"/>
    }
    if(peg == 2) {
      return <img src="https://i.imgur.com/9K6ENZq.png" width="50" height="50"/>
    }
    if(peg == 3) {
      return <img src="https://i.imgur.com/UpZkXsF.png" width="50" height="50" />
    }
    if(peg == 4) {
      return <img src="http://i.imgur.com/om3Suft.png" width="50" height="50"/>
    }
    if(peg == 5) {
      return <img src="http://i.imgur.com/QOjponC.png" width="50" height="50" />
    }
    if(peg == 6) {
      return <img src="http://i.imgur.com/jZqu12t.png" width="50" height="50" />
    }
  }

  function answerImage(answer) {
    if(answer == 0) {
      return <img src="http://i.imgur.com/S30jr7w.png" width="50" height="50"/>
    }
    if(answer == 1) {
      return <img src="http://i.imgur.com/FFovJag.png" width="50" height="50"/>
    }
    if(answer == 2) {
      return <img src="http://i.imgur.com/PXR5ddV.png" width="50" height="50"/>
    }
  }

  var guessesArray = [];
  function renderPegs(row) {
    var pegArray = []
    row.pegs.map((peg) => (
      pegArray.push(pegImage(peg))
    ))
    guessesArray.push(pegArray)
  }

  var answerArray = [];
  function renderAnswers(row) {
    var dotArray = []
    // shuffle(row.answer)
    row.answer.map((answer) => (
      dotArray.push(answerImage(answer))
    ))
    answerArray.push(dotArray)
  }

  // function shuffle(answer) {
  //   var m = answer.length, t, i
  //
  //   // While there remain elements to shuffle…
  //   while (m) {
  //
  //     // Pick a remaining element…
  //     i = Math.floor(Math.random() * m--)
  //
  //     // And swap it with the current element.
  //     t = answer[m]
  //     answer[m] = answer[i]
  //     answer[i] = t
  //   }
  //
  //   return answer
  // }

  function getRows() {
    var rows = []
    for (var i = 0; i < guessesArray.length; i++) {
      rows.push(<div className="mastermind-row"><span>{guessesArray[i]}</span><span>{answerArray[i]}</span></div>)
    }
    return rows
  }


  return (<div>
    {(this.props.rows) &&
      this.props.rows.map((row) => (
      renderPegs(row)
    ))}

    {(this.props.rows) &&
      this.props.rows.map((row) => (
      renderAnswers(row)
    ))}

    {getRows()}
    </div>)
}

}

export default RowListItem
