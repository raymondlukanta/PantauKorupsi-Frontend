import React, { Component } from 'react';
import { Issue } from '../Issue';

/* component styles */
// import styles from './styles';

export class Issues extends Component {
    static propTypes = {
        items: React.PropTypes.array,
        delItem: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(event) {
        const index = event.currentTarget.dataset.index;
        this.props.delItem(index);
    }

    render() {
        const { items } = this.props;

        return (
            <div>
            {!items.length && <span>Array is empty</span>}
            {
                items.map((item, index) =>
                    <Issue issue={item}/>
                )
            }
            </div>
            );
    }
}
