import React from 'react'
import ReactModal from 'react-modal';

import './styles.scss'

interface Props {
	children: React.ReactElement;
	isOpen: boolean;
	onClose: () => void;
}

function Modal({ children, isOpen, onClose }: Props) {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={() => onClose()}
			className='modal'
			overlayClassName='modal-overlay'
		>
			{children}
		</ReactModal>
	)
}

export default Modal