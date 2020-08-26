import React, { Component } from 'react';
import employees from './employeelist.json';
import Directory from './components/Directory';
import EmployeesTable from './components/EmployeesTable';
import Title from './components/Title';

class App extends Component {
    state = {
        employees,
        filteredList: employees,
        search: ""
    };

    //Sets a variable to allow us to access employees that are filtered when we search, set to lowercase for consistency, and checking if it matches with the starting values of the employees in the directory
    handleInputChange = e => {
        const input = e.target.value;
       
        const filteredList = this.state.employees.filter((employee) => 
        employee.fullName.toLowerCase().startsWith(input.toLowerCase())
        );

        this.setState({ filteredList });

        this.setState({
            search: input
        });
    };

    //Function to sort employees by name alphabetically
    sortByName = () => {
        let sortedNames = this.state.filteredList.sort((a, b) => 
            a.fullName > b.fullName ? 1 : -1
        );

        this.setState({ filteredList: sortedNames });
    };

    //Function to sort employees by role alphabetically
    sortByRole = () => {
        let sortedRoles = this.state.filteredList.sort((a,b) =>
        a.role > b.role ? 1 : -1
        );

        this.setState({ filteredList: sortedRoles });
    };

    render() {
        return(
            <Directory>
                <Title>Employee Directory</Title>
                <form className="form mb-5">
                    <input
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Find an employee by name"
                    />
                </form>
                <EmployeesTable
                employees={this.state.filteredList}
                sortByName={this.sortByName}
                sortByRole={this.sortByRole}
                />
            </Directory>
        )
    
    }

}

export default App;