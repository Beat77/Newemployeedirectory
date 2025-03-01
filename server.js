const express = require ('express');
const app = express ();
const employees = require ("./employee.js")

app.get ('/',(req,res)=>{
res.send ('Hello Employees')
})

app.get ('/employees',(req,res) => {
res.send (employees)
})

app.get ('/employees/random',(req,res)=> {
const random = employees [Math.floor(Math.random()*employees.length)]
    res.send (random)

})










app.get ('/employees/:id',(req,res)=> {
 const params = req.params
 const id =Number(params.id) 
 const employeeObj = employees.find((employee)=>{
return id === employee.id
 })
res.send (employeeObj) 
})







app.listen (3000, ()=>{
    console.log ('Listening')
} )