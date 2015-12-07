import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import ReactDisqusThread from 'react-disqus-thread';

/* components */
import { Issue } from 'components/Issue';
import { Feed } from 'components/Feed';
import { Actor } from 'components/Actor';
import { LoadingPage } from '../LoadingPage';
import { Organization } from 'components/Organization';

/*Redux */
import { loadReadIssue, loadVerifyIssue } from 'actions/issues';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

const metaData = {
    title: 'PANTAU KORUPSI',
    description: 'Wadah kolaborasi KPK, ICW, dan publik untuk memantau dan berkontribusi terhadap arsip kasus korupsi',
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
     dispatch => bindActionCreators({loadReadIssue, loadVerifyIssue}, dispatch)
)
export class IssueDetail extends Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.loadVerifyIssue(this.issueId)
        // console.log(this.props.values)
        event.preventDefault();
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

        var {
            involvements,
            feeds,
            organizations,
            procurement_url,
            verifier
        } = issue;

        if (involvements === undefined) { involvements = [] }
        if (feeds === undefined) { feeds = [] }
        if (organizations === undefined) { organizations = [] }

        var url = []
        if (procurement_url !== undefined) { url = (<p><b>Tautan: </b><a href={procurement_url} target="_blank">{procurement_url}</a></p>) }

        var unverified
        if (verifier === null) { 
            unverified = (<span> (<span className="text-danger">Belum Terverifikasi</span>)</span>) 
        }

        var isModerator = localStorage.getItem('moderator_pantau_korupsi');
        var verifyButton
        if (verifier === null && isModerator === 'true') {
            verifyButton = (<button className="btn btn-primary" onClick={this.handleClick}>Verifikasi Kasus</button>)
        }

        console.log("isModerator")
        console.log(isModerator)
        return (
            <section className={styles}>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
								<h2>{issue.title}<br />{unverified}</h2>
                                { verifyButton }
                                <p className="meta">
                                    Dicatat oleh {issue.user.name} | {issue.createdAt}
                                </p>
                                <br/>
                                <p><b>Kerugian Negara: </b>Rp {Number(issue.financialCost).formatMoney()}</p>
                                <p><b>Tahap: </b>{this._renderStatus(issue.status)}</p>
                                {url}
                                <p>{issue.description}</p>
                                <br/>
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
                                            <tbody>
                                                { !feeds && !feeds.length && <span>Tidak tersedia</span> }
                                                {
                                                    feeds.map((feed, index) =>
                                                        <Feed feed={feed}/>
                                                    )
                                                }
                                                </tbody>
                                        </table>
                                        <div className="add-new-button">
                                            <Link to="/feeds/new" className="btn btn-primary add-issue-button" type="submit">+ Tambah Berita</Link>
                                        </div>
                                    </div>
                                    <div id="issue-actors" className="tab-pane fade">
                                        <table>
                                            <tbody>
                                                { !involvements && !involvements.length && <span>Tidak tersedia</span>}
                                                {
                                                    involvements.map((involvement, index) =>
                                                        <Actor actor={involvement.actor} involvement={involvement}/>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        <div className="add-new-button">
                                            <Link to="/actors/new" className="btn btn-primary add-issue-button" type="submit">+ Tambah Pihak Terkait</Link>
                                        </div>
                                    </div>
                                    <div id="issue-organizations" className="tab-pane fade">
                                        { !organizations && !organizations.length && <span>Tidak tersedia</span>}
                                        {
                                            organizations.map((organization, index) =>
                                                <Organization organization={organization}/>
                                            )
                                        }
                                        <div className="add-new-button">
                                            <Link to="/organizations/new" className="btn btn-primary add-issue-button" type="submit">+ Tambah Institusi Terkait</Link>
                                        </div>
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
                                className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 disqus-box" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    _renderStatus(status) {
        if (status === undefined) return;

        var className;
        if (status.id >= 5) {
            className = "text-success";
        } else if (status.id >= 3) {
            className = "text-warning";
        } else {
            className = "text-danger";
        }
        return (<span className={className}>{status.name}</span>);
    }
}
