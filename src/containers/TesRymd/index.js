import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import * as actionCreators from 'actions/users';

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

@connect(
  mapStateToProps,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class TesRymd extends Component {
  constructor(props) {
    super(props);
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
  // const { login } = { "login": "AKu" }
  const { path } = state.routing
  const {
    entities: { users }
  } = state

  return {
    user: users["Steve"],
    login:path
  }
}
