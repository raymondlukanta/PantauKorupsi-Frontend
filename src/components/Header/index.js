import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.hideHeader = this.hideHeader.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideHeader);
  }

  hideHeader() {
    const opacity = 1 - (window.pageYOffset / 200).toFixed(1);
    this.refs.header.style.opacity = opacity;
  }

  render() {
    return (
      <header className={`${styles}`} ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2 logo">
              <Link to="/">
                PANTAU KORUPSI
              </Link>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <nav>
                <Link to="/home" activeClassName="active">
                  Beranda
                </Link>
                <Link to="/issues" activeClassName="active">
                  Kasus
                </Link>
                <Link to="/actors" activeClassName="active">
                  Tokoh
                </Link>
                <Link to="/organizations" activeClassName="active">
                  Institusi
                </Link>
              </nav>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
              <Link to="/login" activeClassName="active">
                  Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
