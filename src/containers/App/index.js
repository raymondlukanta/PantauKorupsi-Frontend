import React, { Component } from 'react';
import 'bootstrap-webpack';

/* global styles for app */
import 'style!./styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { doLogin } from 'actions/sessions';

@connect(
  state => state.form,
  dispatch => bindActionCreators({ doLogin }, dispatch)
)
export class App extends Component {
  constructor(props) {
        super(props);
    }

  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <Header {...this.props} />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
