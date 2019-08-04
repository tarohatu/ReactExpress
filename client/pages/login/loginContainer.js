import { connect } from 'react-redux'
import { actions } from '../../actions/login'
import LoginPage from './login'

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    idChanged: (id) => dispatch(actions.loginIdChanged(id)),
    passwordChanged: (password) => dispatch(actions.loginPasswordChanged(password)),
    loginRequested: () => dispatch(actions.loginRequested()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);