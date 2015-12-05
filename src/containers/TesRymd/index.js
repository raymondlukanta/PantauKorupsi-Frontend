import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import {loadUser, deleteUser} from 'actions/users';

const metaData = {
  title: 'Redux test',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

function loadData(props) {
  props.loadUser("userName")
}

function loadDeleteUser(props) {
  props.deleteUser(1)
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({loadUser, deleteUser}, dispatch)
)
export class TesRymd extends Component {
  constructor(props) {
    super(props);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  handleLoadMoreClick() {
    loadDeleteUser(this.props)
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
          <button style={{ fontSize: '150%' }}
                onClick={this.handleLoadMoreClick}>
                halo
          </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { path } = state.routing
  const {
    entities: { users }
  } = state

  return {
    user: users,
    login:path
  }
}
