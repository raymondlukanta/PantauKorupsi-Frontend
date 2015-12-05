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
                "title": "Judul Issue #1",
                "description": "lorem ipsum"
            },
            {   "id": 2,
                "title": "Judul Issue #2",
                "description": "lorem ipsum"
            },
            {   "id": 3,
                "title": "Judul Issue #3",
                "description": "lorem ipsum"
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
