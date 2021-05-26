import React from 'react'
import Table from 'react-bootstrap/Table'
import { FaSortUp } from 'react-icons/fa'

import Body from './body'
import './EmployeesTable.css'

function EmployeesTable(props) {
	console.log(Table)
	return (
		<Table striped bordered hover variant='light'>
			<thead>
				<tr>
					<th>Picture</th>
					<th onClick={props.sortByName}>
						Name <FaSortUp />
					</th>
					<th onClick={props.sortByRole}>
						Role <FaSortUp />
					</th>
					<th>Phone Number</th>
					<th>Email Address</th>
				</tr>
			</thead>
			<Body employees={props.employees} />
		</Table>
	)
}

export default EmployeesTable
