import React, { useCallback } from 'react';
import { Modal } from 'react-bootstrap/';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from '..';
import img from '../../assets/delete-image.PNG';
import { deleteUser } from '../../redux/fsdbActions';
import "./modal.scss";

const DeleteModal = (props) => {
    const dispatch = useDispatch();
    let buttonDeleteText = "ok";
    let buttonCancelText = "Cancel";
    let buttonType = "delete";

    const handleDeleteUser = useCallback(
        async () => {
            try {
                dispatch(deleteUser(props.data.id));
                props.onHide();
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }, [dispatch, props]);

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="delete-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirm User Deletion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={img} alt="question-mark" />
                <p>Are you Sure?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button type={buttonType} text={buttonDeleteText} click={handleDeleteUser} loading={false} />
                <Button type={buttonType} text={buttonCancelText} click={props.onHide} />
            </Modal.Footer>
        </Modal>
    );
};

export default React.memo(DeleteModal);