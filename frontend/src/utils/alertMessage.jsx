import { Alert } from '@mui/material';
import React from 'react';
import Dark from './dark';

const AlertMessage = ({ message, error, setShow }) => {
	return (
		<>
			<Dark setShow={setShow} />
			<Alert
				severity={error ? 'error' : 'success'}
				sx={{
					position: 'fixed',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 99999,
				}}>
				{message}
			</Alert>
		</>
	);
};

export default AlertMessage;
