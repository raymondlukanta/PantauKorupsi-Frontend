import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';

import 'style!css!react-datepicker/dist/react-datepicker.css'

const metaData = {
    title: 'Redux Easy Boilerplate',
    description: 'Start you project easy and fast with modern tools',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
        },
    },
};

export class OrganizationFormPage extends Component {

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
                                    <h2>Institusi Baru</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <form>
                                    <div className="form-group">
                                        <label for="organizationName">Nama Institusi</label>
                                        <input type="text" className="form-control" id="actorName" placeholder="Nama" />
                                    </div>
                                    <div className="form-group">
                                        <label for="organizationDescription">Tentang Institusi</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="organizationURL">Tautan Tentang Institusi</label>
                                        <input type="text" className="form-control" id="organizationURL" placeholder="http://example.com" />
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
