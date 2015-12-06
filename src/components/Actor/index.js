import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Actor extends Component {
    static propTypes = {
        actor: React.PropTypes.object,
    }

    render() {
        const { actor } = this.props;

        console.log(actor);

        return (
            <tr className={styles}>
                <td className="col-md-2 occuredAt actor-thumbnail">
                    <img src={actor.imageUrl} className="img-circle" />
                </td>
                <td className="col-md-10">
                    <h5><Link to={"/actors/" + actor.id}>{actor.name}</Link></h5>
                    <p>{actor.description}</p>
                </td>
            </tr>
        );
    }
}
