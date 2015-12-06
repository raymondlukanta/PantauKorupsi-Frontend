import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Actor extends Component {
    static propTypes = {
        actor: React.PropTypes.object,
    }

    render() {
        const { actor, involvement } = this.props;

        var badge
        if (involvement !== undefined) {
            console.log(involvement)
            badge = this._renderStatus(involvement.actorStatus)
        }

        return (
            <tr className={styles}>
                <td className="col-md-2 occuredAt actor-thumbnail">
                    <img src={actor.imageUrl} className="img-circle" />
                </td>
                <td className="col-md-10">
                    <h5><Link to={"/actors/" + actor.id}>{actor.name}</Link> {badge}</h5> 
                    <p>{actor.description}</p>
                </td>
            </tr>
        );
    }

    _renderStatus(status) {
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
        return <span>(<em><span className={cn}>{status.name}</span></em>)</span>
    }
}
