import React, { Component } from 'react';
import { OrganizationRow } from '../OrganizationRow';

/* component styles */
import styles from './styles';

export class OrganizationTable extends Component {
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
            <div className={styles}>
                <table className="table table-striped">
                    <col width="40%" />
                    <col width="60%" />
                    <tr>
                        <th>Nama Organisasi</th>
                        <th>Deskripsi</th>
                    </tr>
                    {!items.length && <span>Array is empty</span>}
                    {
                        items.map((item, index) =>
                            <OrganizationRow organization={item}/>
                        )
                    }
                </table>
            </div>
            );
    }
}
