import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components';
import { validateEmail } from '../utils/utils';
import { addUser } from '../redux/fsdbActions';
import classes from "../styles/login.module.scss";

const AddUser = () => {
    const { users } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    let buttonText = "Add User";
    let buttonVariant = "cyan";

    const handleAddUser = useCallback(
        async (e) => {
            e.preventDefault();

            if (!name.current.value) { return toast.warn("Full name is required!"); }
            if (!email.current.value) { return toast.warn("Email is required!"); }
            if (validateEmail(email.current.value)) { return toast.warn("Invalid Email!"); }
            if (!password.current.value) { return toast.warn("Password is required!"); }
            if (!confirmPassword.current.value) { return toast.warn("Confirm your password!"); }
            if (confirmPassword.current.value !== password.current.value) { return toast.warn("Your passwords do not match!"); }

            const registerDetails = {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            };

            try {
                if (users.find(userItem => userItem.email === registerDetails.email)) return toast.error('User email already exists');
                dispatch(addUser(registerDetails)).then(() => {
                    navigate('/', { replace: true });
                });
            } catch (error) {
                toast.error(error);
            }
        },
        [dispatch, navigate, users],
    );

    return (
        <div className={classes.container}>
            <h3>Add User</h3>
            <form className="global-form" onSubmit={handleAddUser}>
                <div>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="full-name" id="full-name" placeholder="Anne Hunter" ref={name} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="anne.hunter@mail.com" ref={email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="******" ref={password} />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password"
                        placeholder="******" ref={confirmPassword} />
                </div>
                <Button text={buttonText} variant={buttonVariant} bold loading={false} />
            </form>
        </div>);
};

export default AddUser;