import React, { Component } from 'react';
import { IssueRow } from '../IssueRow';

/* component styles */
import styles from './styles';

export class IssueTable extends Component {
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
        var content = []
        if (items == undefined || items.length < 1) {
            content = (<tr><td colSpan={4}>Array is empty</td></tr>)
        } else {
            for (var id in items) {
                content.push(<IssueRow key={id} issue={items[id]}/>)
            }
        }
        console.log(content)

        return (
            <div className={styles}>
                <table className="table table-striped">
                <colgroup>
                    <col width="40%" />
                    <col width="25%" />
                    <col width="25%" />
                    <col width="10%" />
                </colgroup>
					<thead>
                        <tr>
                            <th>Nama Kasus</th>
                            <th>Kerugian Negara</th>
                            <th>Tanggal Mulai</th>
                            <th>Status</th>
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
