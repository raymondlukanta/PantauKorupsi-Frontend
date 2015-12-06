import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issue } from 'components/Issue';
import { Actor } from 'components/Actor';

/*Redux */
import { loadReadOrganization } from 'actions/organizations';
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

function loadData(props, organizationId) {
    props.loadReadOrganization(organizationId)
}

function mapStateToProps(state) {
    const {
        entities: { organizations }
    } = state

    return {
        organizations: organizations
    }
}

@connect(
    mapStateToProps,
    dispatch => bindActionCreators({loadReadOrganization}, dispatch)
)
export class OrganizationDetailPage extends Component {
    constructor(props) {
        super(props)
        // this.handleNewComment = this.handleNewComment.bind(this)
    }

    // handleNewComment(comment) {
    //     console.log(comment.text);
    // }

    componentWillMount() {
        this.organizationId = this.props.params.id
        loadData(this.props, this.organizationId)
    }

    componentDidUpdate (prevProps) {
        let oldId = prevProps.params.id
        let newId = this.props.params.id
        if (newId !== oldId) {
            this.organizationId = this.props.params.id
            loadData(this.props, newId)
        }
    }

    render() {
        const { organizations } = this.props

        var organization
        var issues
        // var actors
        if (organizations != undefined) {
            organization = organizations[this.organizationId]
            issues = organization[""]
        }

        var issues = [
            {   "title": "Setya Novanto Dibidik Sangkaan Korupsi",
                "description": "Kejaksaan Agung membidik Ketua DPR Setya Novanto dengan sangkaan korupsi. Bidikan itu dilakukan terkait dugaan pencatutan nama Presiden Joko Widodo dan Wakil Presiden Jusuf Kalla",
                "author": "James Reddy",
                "financialCost": "IDR50.000.000.000",
                "createdAt": "4 December 2015",
                "startedAt": "2015-11-08",
                "status": "Penyelidikan"
            },
            {
                "title": "Terdakwa Korupsi Pergola Dipaksa DPRD",
                "description": "Kepala Badan Lingkungan Hidup (BLH) Yogyakarta nonaktif, Irfan Susilo mengaku dipaksa oleh pihak legislatif untuk terus menjalankan proyek pergola tahun anggaran 2013",
                "author": "James Reddy",
                "financialCost": "IDR10000000000",
                "createdAt": "4 December 2015",
                "startedAt": "2015-08-04",
                "status": "Selesai"
            },
            {   "title": "Korupsi Benanga, Ganti Rugi Diubah Jadi Bansos, Tiga Pejabat Pemkot Diperiksa",
                "description": "Persidangan perkara korupsi bantuan sosial (bansos) Benanga di Pengadilan Tipikor Samarinda, masih berkutat di pemeriksaan saksi",
                "author": "James Reddy",
                "financialCost": "IDR20000000000",
                "createdAt": "4 December 2015",
                "startedAt": "2015-05-15",
                "status": "Penyelidikan"
            }
        ]

        var actors = [
            {   "name": "Widjanarko Puspoyo, MA",
                "description": "Kepala BULOG periode 2001 s/d 2003 / Direktur Utama Perum BULOG, periode 2003 s/d 2007",
                "profile_url": ""
            },
            {   "name": "Ir. Jamerdin Purba",
                "description": "Pegawai Negeri Sipil / Kepala Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong (SK Menteri Pertanian tanggal 25 Januari 2005)",
                "profile_url": ""
            },
            {   "name": "Ir. Yulianus Telaumbanua",
                "description": "Pegawai Negeri Sipil/ Ketua Panitia Pelelangan, Pembelian/Pengadaan Ternak Kerbau Lokal pada Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong tahun 2005",
                "profile_url": ""
            }
        ]

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <h2>{organization.name}</h2>
                                <p>{organization.description}</p>
                            </div>
                        </div>
                        <div className="row issue-detail-tab">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#organization-issues">Kasus Terkait</a></li>
                                    <li><a data-toggle="tab" href="#organization-actors">Pihak Terkait</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="organization-issues" className="tab-pane fade in active">
                                        <table>
                                            <tbody>
                                                {!issues.length && <span>Tidak tersedia</span>}
                                                {
                                                    issues.map((issue, index) =>
                                                        <Issue issue={issue}/>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="organization-actors" className="tab-pane fade">
                                        <table>
                                            <tbody>
                                                {!actors.length && <span>Tidak tersedia</span>}
                                                {
                                                    actors.map((actor, index) =>
                                                        <Actor actor={actor}/>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
