import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export class Organization extends Component {
    static propTypes = {
        organization: React.PropTypes.object,
    }

    render() {
        const { organization } = this.props;

        return (
            <div className={styles}>
                <div className="organization-row">
                    <h5>{organization.name}</h5>
                    <p>{organization.description}</p>
                </div>
            </div>
        );
    }
}
