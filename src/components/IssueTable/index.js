import React, { Component } from 'react';
import { IssueRow } from '../IssueRow';

/* component styles */
import styles from './styles';

export class IssueTable extends Component {
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
                    <col width="25%" />
                    <col width="25%" />
                    <col width="10%" />
                    <tr>
                        <th>Nama Kasus</th>
                        <th>Kerugian Negara</th>
                        <th>Tanggal Mulai</th>
                        <th>Status</th>
                    </tr>
                    {!items.length && <span>Array is empty</span>}
                    {
                        items.map((item, index) =>
                            <IssueRow issue={item}/>
                        )
                    }
                </table>
            </div>
            );
    }
}
