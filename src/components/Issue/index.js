import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Issue extends Component {
    static propTypes = {
        issue: React.PropTypes.object,
    }

    render() {
        const { issue } = this.props;

        return (
            <tr className={styles}>
                <td className="col-md-2 occuredAt">{issue.startedAt}</td>
                <td className="col-md-10">
                    <h5><Link to={`issues/${issue.id}`}>{issue.title}</Link></h5>
                    <p>{issue.description}</p>
                </td>
            </tr>
        );
    }
}
