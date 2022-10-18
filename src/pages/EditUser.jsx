import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components';
import { getOneUser, updateUser } from '../redux/rtdbActions';
import { validateEmail } from '../utils/utils';

const EditUser = () => {
    const { users, selectedUser } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    let buttonText = "Save";
    let buttonVariant = "cyan";
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await dispatch(getOneUser(id));
                setName(res.name);
                setEmail(res.email);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, [dispatch, id]);

    const handleEditUser = async (e) => {
        e.preventDefault();

        if (name.trim() === "") { return toast.warn("Name is required!"); }
        if (email.trim() === "") { return toast.warn("Email is required!"); }
        if (validateEmail(email)) { return toast.warn("Invalid Email!"); }

        const userDetails = {
            id,
            name: name.trim(),
            email: email.trim(),
        };

        if (userDetails.email !== selectedUser.email) {
            if (users.find(userItem => userItem.email === userDetails.email)) return toast.error('User email already exists');
        }

        try {
            dispatch(updateUser(userDetails)).then(() => {
                navigate('/', { replace: true });
            });
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="container">
            <h3>Edit User Information</h3>
            <form className="global-form" onSubmit={handleEditUser}>
                <div>
                    <label htmlFor="full-name">Full Name</label>
                    <input value={name} type="text" name="full-name" id="full-name" placeholder="Anne Hunter" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={email} type="text" name="email" id="email" placeholder="anne.hunter@mail.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button text={buttonText} variant={buttonVariant} bold loading={false} />
            </form>
        </div>
    );
};

export default EditUser;