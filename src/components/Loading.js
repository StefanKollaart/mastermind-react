import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';
import './Loading.sass'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props
    if (!loading) return null

    return (
      <div className="loading">
        <CircularProgress size={80} thickness={5} />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
