import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment'

/* component styles */
import styles from './styles';

export class Issue extends Component {
    static propTypes = {
        issue: React.PropTypes.object,
    }

    render() {
        const { issue, involvement } = this.props;

        var sebagai
        if (involvement) {
            sebagai = (<div><b>Sebagai: </b>{this._renderActorStatus(involvement.actorStatus)}</div>)
        }
        console.log(involvement)

        return (
            <tr className={styles}>
                <td className="col-md-2 occuredAt">{moment(issue.startedAt).format("DD MMM YYYY")}</td>
                <td className="col-md-10">
                    <h5><Link to={`issues/${issue.id}`}>{issue.title}</Link></h5>
                    <div><b>Kerugian Negara: </b>Rp {Number(issue.financialCost).formatMoney()}</div>
                    <div><b>Tahap: </b>{this._renderStatus(issue.status)}</div>
                    {sebagai}
                    <p>{issue.description}</p>
                </td>
            </tr>
        );
    }

    _renderStatus(status) {
        var className;
        if (status.id >= 5) {
            className = "text-success";
        } else if (status.id >= 3) {
            className = "text-warning";
        } else {
            className = "text-danger";
        }
        return (<span className={className}>{status.name}</span>);
    }

    _renderActorStatus(status) {
        var cn
        switch (status.id) {
        case 1:
            cn = "text-info"
            break;
        case 2:
            cn = "text-warning"
            break;
        case 3:
            cn = "text-warning"
            break;
        case 4:
            cn = "text-danger"
            break;
        }
        return <span className={cn}>{status.name}</span>
    }
}
