const express = require('express');
const hbs= require('hbs');
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "hbs")

app.set('views',__dirname+'/views');

app.get('/',(req, res )=>{
res.render('contenders',{
    goTeams:[
        {team:"India", ranks:1 , titles:2},
        {team:"Australia", ranks:3 , titles:5},
        {team:"WI", ranks:4 , titles:2},
        {team:"SA", ranks:6 , titles:1}
    ]
})

})

app.listen(4444,()=>{
    console.log("server started on http://localhost:4444/")
})