import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactPaginate from 'react-paginate';

/* components */
import { OrganizationTable } from 'components/OrganizationTable';

/*Redux */
import { loadReadOrganizationList } from 'actions/organizations';
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
  props.loadReadOrganizationList()
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
    dispatch => bindActionCreators({loadReadOrganizationList}, dispatch)
)
export class OrganizationsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const { organizations } = this.props
        
        // var organizations = [
        //     {   "id": 1,
        //         "name": "PT GINA REKSA UTAMA",
        //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        //         "organization_url": ""
        //     },
        //     {   "id": 2,
        //         "name": "CV. Adi Putra Maros",
        //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        //         "organization_url": ""
        //     },
        //     {   "id": 3,
        //         "name": "PT. PLN Ranting Selong Cabang Mataram",
        //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        //         "organization_url": "" 
        //     },
        //     {   "id": 4,
        //         "name": "Yayasan Pembina IKIP Veteran Semarang",
        //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        //         "organization_url": ""
        //     },
        // ]

        var pageNum = 5;

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row header">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
                                <div className="page-header">
                                    <h2>Institusi</h2>
                                </div>
                                <p>Institusi yang terlibat kasus korupsi, baik yang terkait secara langsung maupun tidak langsung.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
                                <OrganizationTable {...this.props} items={organizations}/>
                            </div>
                        </div>
                        <div className="row pagination-page">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
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
}
