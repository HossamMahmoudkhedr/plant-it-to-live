import {
	Box,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import UserDetails from '../utils/userDetails';

// function createData(id, name, email) {
// 	return { id, name, email };
// }

// const rows = [
// 	createData(1, 'Frozen yoghurt', 'nhem318@gmail.com'),
// 	createData(2, 'Frozen yoghurt', 'nhem318@gmail.com'),
// 	createData(3, 'Frozen yoghurt', 'nhem318@gmail.com'),
// 	createData(4, 'Frozen yoghurt', 'nhem318@gmail.com'),
// ];

const Users = () => {
	const [rows, setRows] = useState([]);
	const [show, setShow] = useState(false);
	const [deleted, setDeleted] = useState(false);
	const [pagination, setPagination] = useState([]);
	const [selectedUserData, setSelectedUserData] = useState({});
	const handleClick = (id) => {
		const selectedUser = rows.filter((user) => user.id === id);
		setSelectedUserData(selectedUser[0]);
		setShow(true);
	};
	useEffect(() => {
		fetchApi(`admin/users?token=${Cookies.get('admin')}`)
			.then((data) => {
				console.log(data);
				setRows(data.data.users.data);
				setPagination(
					Array.from(
						{ length: parseInt(data.data.users['last_page']) },
						(_, i) => i + 1
					)
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		console.log(rows);
	}, [rows]);
	return (
		<>
			{selectedUserData.name && show && (
				<UserDetails
					name={selectedUserData.name}
					email={selectedUserData.email}
					setShow={setShow}
					id={selectedUserData.id}
					setRows={setRows}
				/>
			)}
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table">
					<TableHead>
						<TableRow>
							{/* <TableCell align="center">Id</TableCell> */}
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Active</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								onClick={() => {
									handleClick(row.id);
								}}
								hover
								key={row.id}
								sx={{
									'&:last-child td, &:last-child th': { border: 0 },
									cursor: 'pointer',
								}}>
								{/* <TableCell
								component="th"
								align="center"
								scope="row">
								{row.id}
							</TableCell> */}
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center">{row.email}</TableCell>
								<TableCell align="center">
									{row.activated ? (
										<Typography
											variant="body1"
											sx={{ color: 'green' }}>
											Activated
										</Typography>
									) : (
										<Typography
											variant="body1"
											sx={{ color: 'red' }}>
											Not Activated
										</Typography>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Stack
				direction="row"
				justifyContent={'center'}
				gap="1rem"
				alignItems="center"
				margin="2rem 0">
				{pagination.map((el) => (
					<Box
						sx={{
							backgroundColor: '#aaa',
							padding: '1rem',
							cursor: 'pointer',
						}}
						onClick={() => {
							fetchApi(
								`admin/users?token=${Cookies.get('admin')}&page=${el}`
							).then((data) => {
								setRows(data.data.users.data);

								console.log(data.data.total);
							});
						}}>
						{el}
					</Box>
				))}
			</Stack>
		</>
	);
};

export default Users;
