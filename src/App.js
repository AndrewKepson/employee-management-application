import React, { useState } from 'react'
import employees from './employeelist.json'
import EmployeesTable from './components/EmployeesTable'
import Header from './components/Header'

export default function App() {
	const [state, setState] = useState({
		employees,
		filteredList: employees,
		search: ''
	})

	const getFilteredList = (list, input) =>
		list.filter(item =>
			item.fullName.toLowerCase().startsWith(input.toLowerCase())
		)

	const handleInputChange = e => {
		const input = e.target.value

		const filteredList = getFilteredList(state.employees, input)

		setState({ ...state, filteredList, search: input })
	}

	const sortByName = () => {
		let sortedNames = state.filteredList.sort((a, b) =>
			a.fullName > b.fullName ? 1 : -1
		)
		setState({ ...state, filteredList: sortedNames })
	}

	const sortByRole = () => {
		let sortedRoles = state.filteredList.sort((a, b) =>
			a.role > b.role ? 1 : -1
		)
		setState({ ...state, filteredList: sortedRoles })
	}

	return (
		<div>
			<Header />
			<form className='form mb-8'>
				<input
					value={state.search}
					style={{ margin: '1rem', padding: '0.5rem', width: '500px' }}
					name='search'
					onChange={handleInputChange}
					type='text'
					placeholder='Find an employee by name'
				/>
			</form>
			<EmployeesTable
				employees={state.filteredList}
				sortByName={sortByName}
				sortByRole={sortByRole}
			/>
		</div>
	)
}
