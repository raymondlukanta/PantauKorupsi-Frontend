import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

const metaData = {
    title: 'PANTAU KORUPSI',
    description: 'Wadah kolaborasi KPK, ICW, dan publik untuk memantau dan berkontribusi terhadap arsip kasus korupsi',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
        },
    },
};

export class SignupPage extends Component {
    render() {
        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="page-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <div className="page-header text-center">
                                    <h2>Sign Up</h2>
                                </div>
                                <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                    <div className="form-group">
                                         <label className="sr-only" for="exampleInputEmail2">Nama</label>
                                         <input type="text" className="form-control" id="exampleInputName2" placeholder="Nama" required />
                                    </div>
                                    <div className="form-group">
                                         <label className="sr-only" for="exampleInputEmail2">Email</label>
                                         <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                         <label className="sr-only" for="exampleInputPassword2">Password</label>
                                         <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                         <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                    </div>
                                    <div className="form-group">
                                         <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
