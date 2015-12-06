import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import Select from 'react-select';

import 'style!react-select/scss/default.scss'
import styles from './styles'

/* components */
import { IssueTable } from 'components/IssueTable';

/*Redux */
import { loadReadIssueList } from 'actions/issues';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function loadData(props, params) {
    props.loadReadIssueList(params)
}

function mapStateToProps(state) {
  const {
    entities: { issues }
  } = state

  return {
    issues: issues
  }
}

var statusOptions = [
    { value: 0, label: 'Semua'},
    { value: 1, label: 'Penindakan'},
    { value: 2, label: 'Penyelidikan'},
    { value: 3, label: 'Penyidikan'},
    { value: 4, label: 'Penuntutan'},
    { value: 5, label: 'Inkracht'},
    { value: 6, label: 'Eksekusi'}
];

@connect(
    mapStateToProps,
    dispatch => bindActionCreators({loadReadIssueList}, dispatch)
)
export class IssuesPage extends Component {
    constructor(props) {
        super(props);
        this._handleStatusFilterChange = this._handleStatusFilterChange.bind(this);
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const { issues } = this.props
        return (
            <section className={styles}>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row header">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
                                <div className="page-header">
                                    <h2>Kasus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
                            <div className="filter pull-right">
                                <h5 className="status">Status: </h5>
                                <Select
                                    className="select"
                                    options={statusOptions}
                                    onChange={this._handleStatusFilterChange} />
                            </div>
                            <button className="btn btn-primary add-issue-button" type="submit">+ Tambah Kasus</button>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
                                <IssueTable {...this.props} items={issues}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
 
    _handleStatusFilterChange(value) {
        var params = {}
        if (value !== undefined || value != 0) {
            params = {q: {status_id_eq: value}}
        }
        loadData(this.props, params)
    }
}
