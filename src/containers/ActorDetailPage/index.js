import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issue } from 'components/Issue';
import { Organization } from 'components/Organization';
import { LoadingPage } from '../LoadingPage';


/*Redux */
import { loadReadActor } from 'actions/actors';
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

function loadData(props, actorId) {
    props.loadReadActor(actorId)
}

function mapStateToProps(state) {
  const {
    entities: { actors }
  } = state

  return {
    actors: actors
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({loadReadActor}, dispatch)
)
export class ActorDetailPage extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.actorId = this.props.params.id
        loadData(this.props, this.actorId)
    }

    componentDidUpdate(prevProps) {
        let oldId = prevProps.params.id
        let newId = this.props.params.id
        if (newId !== oldId) {
            this.actorId = this.props.params.id
            loadData(this.props, newId)
        }
    }

    render() {
        const { actors } = this.props

        var actor
        if (actors != undefined) {
            actor = actors[this.actorId]
        }

        if (actor === undefined) {
            return (
                <LoadingPage />
            )
        }

        var {
            involvements
        } = actor;

        if (involvements === undefined) { involvements = [] }

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <div className="col-md-2 actor-large-thumb">
                                    <img src={actor.imageUrl} className="img-circle" />
                                </div>
                                <div className="col-md-10">
                                    <h2>{actor.name}</h2>
                                    <p>{actor.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row issue-detail-tab">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#actor-issues">Kasus Terkait</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="actor-issues" className="tab-pane fade in active">
                                        <table>
                                            {
                                                involvements.map((involvement, index) =>
                                                    <Issue issue={involvement.issue} involvement={involvement}/>
                                                )
                                            }
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
