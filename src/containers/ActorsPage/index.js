import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router';

/* components */
import { Actor } from 'components/Actor';


/*Redux */
import { loadReadActorList } from 'actions/actors';
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
  props.loadReadActorList()
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
  dispatch => bindActionCreators({loadReadActorList}, dispatch)
)
export class ActorsPage extends Component {
    constructor(props) {
        super(props);
        this._handlePageClick = this._handlePageClick.bind(this);
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {        
        const { actors } = this.props

        var pageNum = 5;
        var content;

        if (actors == undefined || actors.length < 1) {
            content = <tr><td colSpan={2}>Tidak tersedia</td></tr>
        } else {
            content = Object.keys(actors).map((id) => <Actor key={id} actor={actors[id]}/>)
        }
        
        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
						<div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <div className="page-header">
                                    <h2>Tokoh</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <Link to="/actors/new" className="btn btn-primary add-issue-button" type="submit">+ Tambah Tokoh</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <table>
                                	<tbody>
                                    	{ content }
                                	</tbody>
                            	</table>
							</div>
                        </div>
                        <div className="row pagination-page">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                                <div className="pull-right">
                                    <ReactPaginate previousLabel={"«"}
                                       nextLabel={"»"}
                                       breakLabel={<li className="break"><a href="">...</a></li>}
                                       pageNum={pageNum}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       clickCallback={this._handlePageClick}
                                       containerClassName={"pagination"}
                                       subContainerClassName={"pages pagination"}
                                       activeClassName={"active"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    _handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        // this.setState({offset: offset}, () => {
        //   this.loadCommentsFromServer();
        // }.bind(this));
    }
}
