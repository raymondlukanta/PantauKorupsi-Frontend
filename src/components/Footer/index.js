import React, { Component } from 'react';

/* component styles */
import styles from './styles';

/* authors */
const AUTHORS = ['anorudes', 'keske'];

export class Footer extends Component {
  render() {
    return (
      <footer className={`${ styles }`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
              Silahkan subscribe untuk mendapatkan pembaharuan tentang korupsi, termasuk pengingat kasus korupsi yang tidak ada perkembangannya lagi.
              <br />
              <br />
              <form action="//amazonaws.us1.list-manage.com/subscribe/post?u=e8c2fffc7d17de9ee383de69d&amp;id=811dd4dbb9" method="post" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate className="form-inline">
                <input type="email" name="EMAIL" placeholder="Email" className="form-control input-sm"/>
                <input type="submit" value="Subscribe" name="subscribe" className="btn btn-primary btn-sm"/>
              </form>
              <br />
              <br />
              <a href="http://ec2-52-77-251-73.ap-southeast-1.compute.amazonaws.com">Pantau Pemilu</a> untuk
              <br />
              <a href="http://hackathonmerdeka.id">Hackaton Merdeka 3.0</a> dan <a href="http://www.indonesia.go.id">Indonesia</a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
