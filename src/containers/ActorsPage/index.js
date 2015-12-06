import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactPaginate from 'react-paginate';

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
        // var actors = [
        //     {   "name": "Widjanarko Puspoyo, MA",
        //         "description": "Kepala BULOG periode 2001 s/d 2003 / Direktur Utama Perum BULOG, periode 2003 s/d 2007",
        //         "profile_url": ""
        //     },
        //     {   "name": "Ir. Jamerdin Purba",
        //         "description": "Pegawai Negeri Sipil / Kepala Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong (SK Menteri Pertanian tanggal 25 Januari 2005)",
        //         "profile_url": ""
        //     },
        //     {   "name": "Ir. Yulianus Telaumbanua",
        //         "description": "Pegawai Negeri Sipil/ Ketua Panitia Pelelangan, Pembelian/Pengadaan Ternak Kerbau Lokal pada Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong tahun 2005",
        //         "profile_url": ""
        //     },
        //     {   "name": "Widjanarko Puspoyo, MA",
        //         "description": "Kepala BULOG periode 2001 s/d 2003 / Direktur Utama Perum BULOG, periode 2003 s/d 2007",
        //         "profile_url": ""
        //     },
        //     {   "name": "Ir. Jamerdin Purba",
        //         "description": "Pegawai Negeri Sipil / Kepala Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong (SK Menteri Pertanian tanggal 25 Januari 2005)",
        //         "profile_url": ""
        //     },
        //     {   "name": "Ir. Yulianus Telaumbanua",
        //         "description": "Pegawai Negeri Sipil/ Ketua Panitia Pelelangan, Pembelian/Pengadaan Ternak Kerbau Lokal pada Balai Pembibitan Ternak Unggul (BPTU) Babi dan Kerbau Siborongborong tahun 2005",
        //         "profile_url": ""
        //     }
        // ]
        
        const { actors } = this.props

        var pageNum = 5;
        var content;

        if (actors == undefined || actors.length < 1) {
            content = <tr><td colSpan={2}>Tidak tersedia</td></tr>
        } else {
            content = Object.keys(actors)
                        .map((id) => <Actor key={id} actor={actors[id]}/>)
        }
        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <table>
                                <tbody>
                                    { content }
                                </tbody>
                            </table>
                        </div>
                        <div className="row pull-right pagination-page">
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
