import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issue } from 'components/Issue';
import { Actor } from 'components/Actor';
import { LoadingPage } from '../LoadingPage';

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

        if (organizations !== undefined) {
            organization = organizations[this.organizationId]
            issues = organization.issues
        }

        if (organization === undefined) {
            return (<LoadingPage />);
        }

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
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#organization-issues">Kasus Terkait</a></li>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
