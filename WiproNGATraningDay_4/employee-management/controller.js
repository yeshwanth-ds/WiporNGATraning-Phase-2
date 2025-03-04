
let employees = [
    { id: 1, name: "yeshwanth", address: "Mysore", dept: "Engineer", manager: "Ram" },
    { id: 2, name: "mohnish", address: "Banglore", dept: "IT", manager: "Bob" }
];

const getEmployees = (req, res) => {
    res.json(employees);
};

const getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    employee ? res.json(employee) : res.status(404).json({ message: "Employee not found" });
};

const addEmployee = (req, res) => {
    const { name, address, dept, manager } = req.body;
    if (!name || !address || !dept || !manager) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newEmployee = { id: employees.length + 1, name, address, dept, manager };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};


const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { name, address, dept, manager } = req.body;
    let employee = employees.find(emp => emp.id == id);

    if (employee) {
        employee.name = name || employee.name;
        employee.address = address || employee.address;
        employee.dept = dept || employee.dept;
        employee.manager = manager || employee.manager;
        res.json(employee);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
};


const deleteEmployee = (req, res) => {
    const { id } = req.params;
    employees = employees.filter(emp => emp.id != id);
    res.json({ message: "Employee deleted successfully" });
};

module.exports = { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
