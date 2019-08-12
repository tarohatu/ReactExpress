import { connect } from 'react-redux'
import { actions } from '../../actions/location'
import MainPage from './main'

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRequested: () => dispatch(actions.locationFetchRequested())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);