import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issue } from 'components/Issue';
import { Feed } from 'components/Feed';
import { Actor } from 'components/Actor';
import { LoadingPage } from '../LoadingPage';
import { Organization } from 'components/Organization';
import ReactDisqusThread from 'react-disqus-thread';

/*Redux */
import { loadReadIssue } from 'actions/issues';
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

function loadData(props, issueId) {
    props.loadReadIssue(issueId)
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
  dispatch => bindActionCreators({loadReadIssue}, dispatch)
)
export class IssueDetail extends Component {
    
    constructor(props) {
        super(props)
        this.handleNewComment = this.handleNewComment.bind(this)
    }

    handleNewComment(comment) {
        console.log(comment.text);
    }

    componentWillMount() {
        this.issueId = this.props.params.id
        loadData(this.props, this.issueId)
    }

    componentDidUpdate (prevProps) {
        let oldId = prevProps.params.id
        let newId = this.props.params.id
        if (newId !== oldId) {
            this.issueId = this.props.params.id
            loadData(this.props, newId)
        }
    }

    render() {
        const { issues } = this.props

        var issue
        if (issues != undefined) {
            issue = issues[this.issueId]
        }

        if (issue === undefined) {
            return (
                <LoadingPage />
            )
        }

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

        var feeds = [
            {   "occuredAt": "2015-01-02",
                "title": "Anggota DPR: Kejaksaan Agung, Polri dan KPK Berhak Usut Kasus Novanto",
                "summary": "Ada yang mengkritik aksi Kejaksaan Agung mengusut dugaan pelanggaran hukum Ketua DPR Setya Novanto. Namun menurut anggota Komisi III DPR Arsul Sani tak ada yang salah dengan aksi Kejagung.",
                "url": "http://news.detik.com/berita/3088622/anggota-dpr-kejaksaan-agung-polri-dan-kpk-berhak-usut-kasus-novanto"
            },
            {   "occuredAt": "2015-04-12",
                "title": "Suara Lantang Tokoh Bangsa Sebut Novanto Langgar Kode Etik",
                "summary": "Setya Novanto makin di ujung tanduk. Rekaman pertemuan Novanto dengan Presiden Direktur PT Freeport Indonesia Maroef Sjamsuddin menjadi saksi bisu skandal pemufakatan jahat di kasus 'Papa Minta Saham' itu.",
                "url": "http://news.detik.com/berita/3088583/suara-lantang-tokoh-bangsa-sebut-novanto-langgar-kode-etik"
            },
            {   "occuredAt": "2015-08-05",
                "title": "BIN Ikut Pantau Kasus Novanto",
                "summary": "Mahkamah Kehormatan Dewan (MKD) telah meminta keterangan dari Menteri ESDM Sudirman Said dan Presdir PT Freeport Indonesia Maroef Sjamsoeddin. Tetapi muncul anggapan bahwa MKD memperlakukan kedua orang itu layaknya terdakwa karena cenderung memojokkan.",
                "url": "http://news.detik.com/berita/3088149/bin-ikut-pantau-kasus-novanto"
            },
            {   "occuredAt": "2015-10-18",
                "title": "Selidiki Kasus Novanto, Jaksa Agung: Korupsi Tak Harus Tunggu Transaksi!",
                "summary": "Jaksa Agung M Prasetyo menegaskan pihaknya serius menyelidiki kasus Ketua DPR Setya Novanto. Kejaksaan Agung akan berpegang pada UU Tipikor dalam melakukan penyelidikan.",
                "url": "http://news.detik.com/berita/3088065/selidiki-kasus-novanto-jaksa-agung-korupsi-tak-harus-tunggu-transaksi"
            }
        ]

        var organizations = [
            {   "name": "PT. PLN Ranting Selong Cabang Mataram",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "organization_url": ""
            },
            {   "name": "CV. Adi Putra Maros",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "organization_url": ""
            }
        ]

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
								<h2>{issue.title}</h2>
                                <p className="meta">
                                    Dicatat oleh {issue.user.name} | {issue.createdAt}
                                </p>
                                <br/>
                                <p>{issue.description}</p>
                                <br/>
                                <p><b>Kerugian Negara: </b>{issue.financialCost}</p>
                            </div>
                        </div>
                        <div className="row issue-detail-tab">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#issue-feeds">Lini Masa</a></li>
                                    <li><a data-toggle="tab" href="#issue-actors">Pihak Terkait</a></li>
                                    <li><a data-toggle="tab" href="#issue-organizations">Organisasi Terkait</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="issue-feeds" className="tab-pane fade in active">
                                        <table>
                                            {!feeds.length && <span>Tidak tersedia</span>}
                                            {
                                                feeds.map((feed, index) =>
                                                    <Feed feed={feed}/>
                                                )
                                            }
                                        </table>
                                    </div>
                                    <div id="issue-actors" className="tab-pane fade">
                                        <table>
                                            {!actors.length && <span>Tidak tersedia</span>}
                                            {
                                                actors.map((actor, index) =>
                                                    <Actor actor={actor}/>
                                                )
                                            }
                                        </table>
                                    </div>
                                    <div id="issue-organizations" className="tab-pane fade">
                                        {!organizations.length && <span>Tidak tersedia</span>}
                                        {
                                            organizations.map((organization, index) =>
                                                <Organization organization={organization}/>
                                            )
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <ReactDisqusThread
                                shortname="pantaukorupsi"
                                identifier={"issue-" + issue.id}
                                title={issue.title}
                                url={"http://www.pantaukorupsi.com/issues/" + issue.id}
                                className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
