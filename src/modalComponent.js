import React from "react"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalComponent = (props) => {

return(
        <div>
            <button onClick={props.openModal}>Open Modal</button>
            <Modal
                isOpen={props.modalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={props.closeModal}>close</button>
                <form onSubmit={props.ModalSubmit}>
                    <div >
                        <input type="text" onChange={(event) => {props.setNewName(event.target.value)}} placeholder={props.artistName}/>
                        <input type="text" onChange={(event) => {props.setNewTitle(event.target.value)}} placeholder={props.titleText}/>
                    </div>
                    <div >
                         <input type="submit" value="Share your song" id="sbmt-btn"/>
                    </div>
                </form>
            </Modal>
        </div>
)
}
export default  ModalComponent