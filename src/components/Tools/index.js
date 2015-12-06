import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

/* images */
const issueImg = require('./files/issue.png');
const actorImg = require('./files/actor.png');
const organizationImg = require('./files/organization.png');

export class Tools extends Component {
    render() {
        return (
            <section className={`${styles}`}>
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h2>
                                Telusuri Berbagai Sudut dari Setiap Kasus Korupsi
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 tool">
                            <img src={issueImg} />
                            <h3><Link to="/issues">Kasus</Link></h3>
                            <h4>
                                Jelajahi dan dapatkan informasi terbaru dari kasus-kasus korupsi yang terjadi di Indonesia.
                            </h4>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 tool">
                            <img src={actorImg} />
                            <h3><Link to="/actors">Tokoh</Link></h3>
                            <h4>
                                Ketahui siapa saja di balik setiap kasus korupsi yang terjadi.
                            </h4>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 tool">
                            <img src={organizationImg} />
                            <h3><Link to="/organizations">Institusi</Link></h3>
                            <h4>
                                Dapatkan informasi mengenai institusi yang terkait kasus korupsi.
                            </h4>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
