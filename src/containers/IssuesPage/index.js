import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';

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

function loadData(props) {
  props.loadReadIssueList()
}

function mapStateToProps(state) {
  const {
    entities: { issues }
  } = state

  return {
    issues: issues
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({loadReadIssueList}, dispatch)
)
export class IssuesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const { issues } = this.props

        // var issues = [
        //     {   "id": 1,
        //         "title": "Setya Novanto Dibidik Sangkaan Korupsi",
        //         "description": "Kejaksaan Agung membidik Ketua DPR Setya Novanto dengan sangkaan korupsi. Bidikan itu dilakukan terkait dugaan pencatutan nama Presiden Joko Widodo dan Wakil Presiden Jusuf Kalla",
        //         "author": "James Reddy",
        //         "financialCost": "IDR50000000000",
        //         "createdAt": "4 December 2015",
        //         "startedAt": "28 November 2015",
        //         "status": "Penyelidikan"
        //     },
        //     {   "id": 2,
        //         "title": "Terdakwa Korupsi Pergola Dipaksa DPRD",
        //         "description": "Kepala Badan Lingkungan Hidup (BLH) Yogyakarta nonaktif, Irfan Susilo mengaku dipaksa oleh pihak legislatif untuk terus menjalankan proyek pergola tahun anggaran 2013",
        //         "author": "James Reddy",
        //         "financialCost": "IDR10000000000",
        //         "createdAt": "4 December 2015",
        //         "startedAt": "4 December 2015",
        //         "status": "Selesai"
        //     },
        //     {   "id": 3,
        //         "title": "Korupsi Benanga, Ganti Rugi Diubah Jadi Bansos, Tiga Pejabat Pemkot Diperiksa",
        //         "description": "Persidangan perkara korupsi bantuan sosial (bansos) Benanga di Pengadilan Tipikor Samarinda, masih berkutat di pemeriksaan saksi",
        //         "author": "James Reddy",
        //         "financialCost": "IDR20000000000",
        //         "createdAt": "4 December 2015",
        //         "startedAt": "4 December 2015",
        //         "status": "Penyelidikan"
        //     }
        // ]

        return (
            <section>
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
                                <div className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Pilih Status
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Penindakan</a></li>
                                        <li><a href="#">Penyelidikan</a></li>
                                        <li><a href="#">Penyidikan</a></li>
                                        <li><a href="#">Penuntutan</a></li>
                                        <li><a href="#">Inkracht</a></li>
                                        <li><a href="#">Eksekusi</a></li>
                                    </ul>
                                </div>

                            </div>
                            <Link to="/issues/new" className="btn btn-primary add-issue-button" type="submit">+ Tambah Kasus</Link>
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
}
