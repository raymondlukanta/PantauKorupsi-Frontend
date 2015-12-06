import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

/* component styles */
import styles from './styles';

export class IssueRow extends Component {
    static propTypes = {
        issue: React.PropTypes.object
    }

    render() {
        const { issue } = this.props;

        console.log(issue)

        return (
            <tr className={styles}>
                <td><Link to={`issues/${issue.id}`}>{issue.title}</Link></td>
                <td className="finCostColumn">Rp {Number(issue.financialCost).formatMoney()}</td>
                <td className="startedAtColumn">{moment(issue.startedAt).format("DD MMM YYYY")}</td>
                <td>{issue.status.name}</td>
            </tr>
        )
    }
}
