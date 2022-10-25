import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../components';
import { getUsers } from '../redux/fsdbActions';
import classes from '../styles/users-list.module.scss';

const UsersList = () => {
    const { users } = useSelector(state => state);
    const dispatch = useDispatch();
    const tableColumn = [
        {
            title: "Name"
        },
        {
            title: "User Email ID"
        },
        {
            title: ""
        }
    ];

    useEffect(() => {
        const fetch = async () => {
            try {
                dispatch(getUsers());
            } catch (error) {
                toast.error(error);
            }
        };
        fetch();
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <h3>Users CRUD Web Application with Firebase</h3>
            <Table data={users} column={tableColumn} loading={false} />
        </div>
    );
};

export default UsersList;