import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

/* redux */
import { reduxForm } from 'redux-form';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.hideHeader = this.hideHeader.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.doLogin(this.props.values)
        event.preventDefault();
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
        const {
          fields: {email, password}
        } = this.props;


        return (
            <header className={`${styles}`} ref="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2 logo">
                            <Link to="/">PANTAU KORUPSI</Link>
                        </div>

                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <nav>
                                <Link to="/home" activeClassName="active">Beranda</Link>
                                <Link to="/issues" activeClassName="active">Kasus</Link>
                                <Link to="/actors" activeClassName="active">Tokoh</Link>
                                <Link to="/organizations" activeClassName="active">Institusi</Link>
                            </nav>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                            <ul id="login-dp" className="dropdown-menu">
                                <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form className="form" onSubmit={this.handleClick} acceptCharset="UTF-8" id="login-nav">
                                                <div className="form-group">
                                                     <label className="sr-only" for="exampleInputEmail2">Email address</label>
                                                     <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required {...email} />
                                                </div>
                                                <div className="form-group">
                                                     <label className="sr-only" for="exampleInputPassword2">Password</label>
                                                     <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required {...password} />
                                                     <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                                </div>
                                                <div className="form-group">
                                                     <button className="btn btn-primary btn-block" onClick={this.handleClick}>Sign in</button>
                                                </div>
                                                <div className="checkbox">
                                                     <label>
                                                     <input type="checkbox" /> keep me logged-in
                                                     </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bottom text-center">
                                            New here ? <Link to="/signup" activeClassName="active"><b>Join Us</b></Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  destroyOnUnmount: false,
})(Header);
