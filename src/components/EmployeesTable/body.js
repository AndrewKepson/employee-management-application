import React from 'react'

export default function Body({ employees }) {
	return (
		<tbody>
			{employees.map(employee => (
				<tr>
					<td>
						<img
							height='150px'
							width='150px'
							src='https://picsum.photos/150/150/?blur'
							alt={employee.fullName}></img>
					</td>
					<td>{employee.fullName}</td>
					<td>{employee.role}</td>
					<td>{employee.phoneNumber}</td>
					<td>{employee.email}</td>
				</tr>
			))}
		</tbody>
	)
}
