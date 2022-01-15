import React from 'react';

import './styles.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	title: string;
}

function Button({ title, onClick }: Props) {
	return (
		<button type="button" onClick={onClick}>
			<h5>{title}</h5>
		</button>
	);
}
export default Button;
