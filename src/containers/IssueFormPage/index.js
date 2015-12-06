import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';

import 'style!css!react-datepicker/dist/react-datepicker.css'

/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { loadCreateIssue } from 'actions/issues';

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

@connect(
  state => state.form,
  dispatch => bindActionCreators({ loadCreateIssue }, dispatch)
)
export class IssueFormPage extends Component {

    constructor() {
        super();
        this.state = {
            startDate: moment()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleClick(event) {
        this.props.loadCreateIssue(this.props.values)
        // console.log(this.props.values)
        event.preventDefault();
    }

    render() {
        const {
          fields: {title, description, started_at, procurement_url},
        } = this.props;

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <div className="page-header">
                                    <h2>Kasus Baru</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <form onSubmit={this.handleClick}>
                                    <div className="form-group">
                                        <label for="issueTitle">Judul Kasus</label>
                                        <input type="text" className="form-control" id="issueTitle" placeholder="Judul Kasus" {...title}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="issueDescription">Deskripsi Kasus</label>
                                        <textarea className="form-control" rows="5" {...description}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="issueStartDate">Tanggal Kejadian</label>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            dateFormat="YYYY/MM/DD"
                                            placeholderText='Tanggal Kejadian' {...started_at}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="issueURL">Tautan</label>
                                        <input type="text" className="form-control" id="issueURL" placeholder="http://example.com" {...procurement_url}/>
                                    </div>
                                    <button className="btn btn-primary" onClick={this.handleClick}>Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

IssueFormPage = reduxForm({
  form: 'issue',
  fields: ['title', 'description', 'started_at', 'procurement_url'],
  destroyOnUnmount: false,
})(IssueFormPage);