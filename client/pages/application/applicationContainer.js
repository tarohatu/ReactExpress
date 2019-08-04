import { connect } from 'react-redux'
import Application from './application'

const mapStateToProps = state => {
  return {
    application: state.application
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);