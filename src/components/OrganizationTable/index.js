import React, { Component } from 'react';
import { OrganizationRow } from '../OrganizationRow';

/* component styles */
import styles from './styles';

export class OrganizationTable extends Component {
    static propTypes = {
        items: React.PropTypes.object,
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
        var content
        if (items == undefined || items.length < 1) {
            content = (<tr><td colSpan={4}>Array is empty</td></tr>)
        } else {
            content = Object.keys(items).map((id) =>
                        <OrganizationRow key={id} organization={items[id]}/>
                    )
        }

        return (
            <div className={styles}>
                <table className="table table-striped">
                    <colgroup>
                        <col width="40%" />
                        <col width="60%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Nama Organisasi</th>
                            <th>Deskripsi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            );
    }
}
