import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issue } from 'components/Issue';
import { Organization } from 'components/Organization';

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

export class ActorDetailPage extends Component {
    render() {
        var actor =
            {   "id": 1,
                "name": "Widjanarko Puspoyo, MA",
                "description": "Kepala BULOG periode 2001 s/d 2003 / Direktur Utama Perum BULOG, periode 2003 s/d 2007",
                "profile_url": ""
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
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                            col-md-offset-2 col-lg-offset-2">
                                <div className="col-md-2 actor-large-thumb">
                                    <img src="http://cdn3.egoseoservices.com/wp-content/uploads/2015/09/profile-picture-1443082834-300x300.jpg" className="img-circle" />
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
                                    <li><a data-toggle="tab" href="#actor-organizations">Institusi Terkait</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="actor-issues" className="tab-pane fade in active">
                                        <table>
                                            {!issues.length && <span>Tidak tersedia</span>}
                                            {
                                                issues.map((issue, index) =>
                                                    <Issue issue={issue}/>
                                                )
                                            }
                                        </table>
                                    </div>
                                    <div id="actor-organizations" className="tab-pane fade">
                                        <table>
                                            {!organizations.length && <span>Tidak tersedia</span>}
                                            {
                                                organizations.map((organization, index) =>
                                                    <Organization organization={organization}/>
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
