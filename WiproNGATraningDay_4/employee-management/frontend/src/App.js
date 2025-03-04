// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Employee from "./Employee";

const App = () => {
    const [employees, setEmployees] = useState([]);

    // Fetch all employees from the backend
    const fetchEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:5000/employees");
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    // Fetch employees when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Handle delete employee operation
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    return (
        <div className="App">
            <h1>Employee Management</h1>
            {/* Employee form for adding a new employee */}
            <Employee refreshEmployees={fetchEmployees} />
            <hr />
            <h2>Employee List</h2>
            <ul>
                {employees.map((emp) => (
                    <li key={emp.id}>
                        <strong>{emp.name}</strong> ({emp.dept}) - Manager: {emp.manager}<br />
                        Address: {emp.address}<br />
                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
