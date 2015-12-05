import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Feed extends Component {
    static propTypes = {
        feed: React.PropTypes.object,
    }

    render() {
        const { feed } = this.props;

        return (
            <tr className={styles}>
                <td className="col-md-2 occuredAt">{feed.occuredAt}</td>
                <td className="col-md-10">
                    <h5><a href="{feed.url}">{feed.title}</a></h5>
                    <p>{feed.summary}</p>
                </td>
            </tr>
        );
    }
}
