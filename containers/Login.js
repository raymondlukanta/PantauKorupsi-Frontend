import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/user'

function loadData(props) {
  props.loadUser("userName")
}

class Login extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    loadData(this.props)
  }


  render() {
    const { user, login } = this.props
    if (!user) {
      return <h1><i>Loading {login}’s profile...</i></h1>
    }
    return (
      <div>
        <p>Test Login</p>
        <hr />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {loadUser})(Login)
