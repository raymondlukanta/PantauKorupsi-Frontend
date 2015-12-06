import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
// import styles from './styles';

export class OrganizationRow extends Component {
    static propTypes = {
        organization: React.PropTypes.object,
    }

    render() {
        const { organization } = this.props;

        return (
            <tr>
                <td><Link to={`organizations/${organization.id}`}>{organization.name}</Link></td>
                <td>{organization.description}</td>
            </tr>
        );
    }
}
