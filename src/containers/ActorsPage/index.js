import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */


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

export class ActorsPage extends Component {
    render() {
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
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
