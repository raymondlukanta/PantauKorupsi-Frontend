import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

export class LoadingPage extends Component {
    render() {
        return (
            <section>
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                          Loading...
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}