import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class IssueRow extends Component {
    static propTypes = {
        issue: React.PropTypes.object,
    }

    render() {
        const { issue } = this.props;

        return (
            <tr className={`${styles}`}>
                <td><Link to={`issues/${issue.id}`}>{issue.title}</Link></td>
                <td>{issue.financialCost}</td>
                <td>{issue.startedAt}</td>
                <td>{issue.status}</td>
            </tr>
            );
    }
}