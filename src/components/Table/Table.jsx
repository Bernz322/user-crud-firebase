import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteModal } from '..';
import { tablePopulate } from '../../utils/utils';
import classes from './table.module.scss';

const Table = ({ data, column, loading }) => {
    const [rowData, setRowData] = useState({});
    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const handleDeleteModal = useCallback(
        (item) => {
            // To get row data and open delete modal
            setRowData(item);
            setDeleteModalShow(true);
        }, []);

    const tableData = tablePopulate(data);

    return (
        <div className={classes.relative}>
            {loading ?
                <h1>Loading</h1>
                :
                <table className={classes.globalTable}>
                    <thead>
                        <tr>
                            {column.map((column, index) => {
                                return (
                                    <th key={index}>{column.title}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item, index) => {
                            return (
                                item ?
                                    <tr key={item.id}>
                                        <td className={classes.hide}> {item.id} </td>
                                        <td>{item.name}</td>
                                        {(item.email) && <td>{item.email}</td>}
                                        <td className={classes.tableActions}>
                                            <>
                                                <Link to={`/edit-user/${item.id}`}>Edit</Link>
                                                <span className={classes.actionSeparator}>|</span>
                                                <p className={classes.pointer} onClick={() => handleDeleteModal(item)}>Delete</p>
                                            </>
                                        </td>
                                    </tr>
                                    :
                                    <tr key={index}>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                            );
                        })}
                    </tbody>
                </table >
            }
            <DeleteModal
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                data={rowData}
            />
        </div>
    );
};

export default Table;