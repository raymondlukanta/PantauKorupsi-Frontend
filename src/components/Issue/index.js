import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Issue extends Component {
    static propTypes = {
        issue: React.PropTypes.object,
    }

    render() {
        const { issue } = this.props;

        return (
            <div className={`${styles}`}>
                <label>
                    <h2>{`${issue.title}`}</h2>
                    <p className="meta">
                        Dicatat oleh {`${issue.author}`} | {`${issue.createdAt}`}
                    </p>
                    <br/>
                    <p>{`${issue.description}`}</p>
                    <br/>
                    <p><b>Kerugian Negara: </b>{`${issue.financialCost}`}</p>
                </label>
            </div>
            );
    }
}
