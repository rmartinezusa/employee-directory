const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees");

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/random", (req, res) => {    
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];

    res.send(randomEmployee.name);
});

app.get("/employees/:id", (req, res) => {
    const employee = employees.find((obj) => obj.id === +req.params.id);
    if (employee) {
        res.send(employee.name);
    } else {
        res.send("id not located...");
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});