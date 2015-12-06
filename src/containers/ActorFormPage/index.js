import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';

import 'style!css!react-datepicker/dist/react-datepicker.css'

const metaData = {
    title: 'PANTAU KORUPSI',
    description: 'Wadah kolaborasi KPK, ICW, dan publik untuk memantau dan berknotribusi terhadap arsip kasus korupsi',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
        },
    },
};

export class ActorFormPage extends Component {

    constructor() {
        super();
        this.state = {
            startDate: moment()
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    render() {
        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <div className="page-header">
                                    <h2>Tokoh Baru</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <form>
                                    <div className="form-group">
                                        <label for="actorName">Nama Tokoh</label>
                                        <input type="text" className="form-control" id="actorName" placeholder="Nama" />
                                    </div>
                                    <div className="form-group">
                                        <label for="actorDescription">Tentang Tokoh</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="actorImageURL">Foto Tokoh</label>
                                        <input type="file" id="actorImageURL" />
                                    </div>
                                    <div className="form-group">
                                        <label for="actorURL">Tautan Tentang Tokoh</label>
                                        <input type="text" className="form-control" id="actorURL" placeholder="http://example.com" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
