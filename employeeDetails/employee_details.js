const employees = [
    { id:1, name: 'John Doe', age:30, departement: 'IT', salary: 50000 },
    { id:2, name: 'Marwen Jridi', age:24, departement: 'IT', salary: 100000 },
    { id:3, name: 'Nizar Nak', age:24, departement: 'Energy', salary: 70000 },
    { id:4, name: 'Rami Ham', age:24, departement: 'Electric', salary: 60000 },
    { id:5, name: 'Bob Johnson', age:35, departement: 'HR', salary: 60000 },
];

function displayEmployees() {

    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.departement}: ${employee.salary}: </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries () {
    const totalSalaries = employees.reduce((total, employee) => total+employee.salary ,0  );
    alert(`Total Salaries: ${totalSalaries}`) 
};

function displayHrEmployees() {
    const hrEmployees = employees.filter(employee => employee.departement === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.departement} - ${employee.salary}: </p>`);
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
};

function findEmployeeById(employeeId) {
    const employeeFound = employees.find(employee => employee.id === employeeId );
    if (employeeFound) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employeeFound.id}: ${employeeFound.name} - ${employeeFound.age}: ${employeeFound.departement}: ${employeeFound.salary}</p>`;
    } else {
        alert('No Employee with ID ',employeeId,' is found!!');
    }
}