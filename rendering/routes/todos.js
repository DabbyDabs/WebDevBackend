const route=require('express').Router()
let todos=[
    {task:"this is the first task"},
    {task: "this is another task"}
]
route.get('/',(req,res) => {res.render('todos', {todos} )})
route.post('/', function(req,res){
todos.push({
    task:req.body.newtodo
})
res.redirect('todos')
})
module.exports= route;
