import React, { Component } from 'react';

/* component styles */
// import styles from './styles';

export class Issue extends Component {
    static propTypes = {
        issue: React.PropTypes.object,
    }

    render() {
        const { issue } = this.props;

        return (
            <div className="">
                <label>
                    <h2>{`${issue.title}`}</h2>
                    <p>{`${issue.description}`}</p>
                </label>
            </div>
            );
    }
}
