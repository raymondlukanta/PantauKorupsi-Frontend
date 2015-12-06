import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

/* images */
const problemImg = require('./files/pilepapers.jpg');

export class Problems extends Component {
    render() {
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 tool">
                            <h2>
                                Ada beberapa masalah dalam menangani kasus korupsi di Indonesia
                            </h2>
                            <ul>
                                <li> Adanya kemungkinan kasus korupsi “menghilang ditelan bumi”</li>
                                <li>Tidak adanya arsip kasus korupsi yang dapat dipantau publik secara real-time</li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 image">
                            <img src={problemImg} />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
