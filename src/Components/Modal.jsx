import React from "react";
import "./Modal.css";
import {Check, Close} from "@mui/icons-material";

const Modal = ({isOpen, onClose, onConfirm}) => {
	if (!isOpen) return null;
	return (
		<div className='modal-overlay'>
			<div className='modal-contents'>
				<p className='modal-warning'>Are you sure you want to delete?</p>
				<div className='caution-btn-wrapper'>
					<p className='modal-caution'>Caution: This is irrevertable</p>
					<div className='modal-buttons'>
						<button>
							<span onClick={onClose}>
								<Close className='modal-iconI' />
								<p style={{color: "red"}}>No</p>
							</span>
						</button>
						<button>
							<span onClick={onConfirm}>
								<Check className='modal-iconII' />
								<p style={{color: "green"}}>Yes</p>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
