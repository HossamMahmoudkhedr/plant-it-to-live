import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';

function createData(id, name, email) {
	return { id, name, email };
}

const rows = [
	createData(1, 'Frozen yoghurt', 'nhem318@gmail.com'),
	createData(2, 'Frozen yoghurt', 'nhem318@gmail.com'),
	createData(3, 'Frozen yoghurt', 'nhem318@gmail.com'),
	createData(4, 'Frozen yoghurt', 'nhem318@gmail.com'),
];

const Users = () => {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 650 }}
				aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Id</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							hover
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell
								component="th"
								align="center"
								scope="row">
								{row.id}
							</TableCell>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Users;
