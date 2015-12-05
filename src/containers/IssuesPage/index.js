import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { Issues } from 'components/Issues';

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

export class IssuesPage extends Component {
    render() {
        var issues = [
            {   "id": 1,
                "title": "Setya Novanto Dibidik Sangkaan Korupsi",
                "description": "Kejaksaan Agung membidik Ketua DPR Setya Novanto dengan sangkaan korupsi. Bidikan itu dilakukan terkait dugaan pencatutan nama Presiden Joko Widodo dan Wakil Presiden Jusuf Kalla",
                "author": "James Reddy",
                "dateCreated": "4 December 2015"
            },
            {   "id": 2,
                "title": "Terdakwa Korupsi Pergola Dipaksa DPRD",
                "description": "Kepala Badan Lingkungan Hidup (BLH) Yogyakarta nonaktif, Irfan Susilo mengaku dipaksa oleh pihak legislatif untuk terus menjalankan proyek pergola tahun anggaran 2013",
                "author": "James Reddy",
                "dateCreated": "4 December 2015"
            },
            {   "id": 3,
                "title": "Korupsi Benanga, Ganti Rugi Diubah Jadi Bansos, Tiga Pejabat Pemkot Diperiksa",
                "description": "Persidangan perkara korupsi bantuan sosial (bansos) Benanga di Pengadilan Tipikor Samarinda, masih berkutat di pemeriksaan saksi",
                "author": "James Reddy",
                "dateCreated": "4 December 2015"
            }
        ]

        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
                                <Issues {...this.props} items={issues}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
