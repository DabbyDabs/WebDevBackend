const express = require('express');
const hbs= require('hbs');
const app= express()
const db= require('./db');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "hbs")

app.set('views',__dirname+'/views');


app.get('/',(req, res )=>{                   //this is when we fetch data from the database
    db.getAllcontenders().then((goTeams)=>{    
        res.render('contenders',{goTeams})
    }).catch((err)=>{
        res.send(err);
})
})
// app.get('/', (req,res)=>{                   // this is the code that has to be written if we
//     res.render('contenders',{               // want to hardcode the data from our server
//         goTeams: [{team:"India" ,ranks:2,titles:2},
//                   {team:"SouthAfrica", ranks:10, titles:1}]
//     })
// })

app.post('/add',(req,res)=>{
    db.addContenders(req.body.team , req.body.ranks ,req.body.titles)
    .then(()=>{
        console.log("i was visited")
        res.redirect('/')
        console.log("i was visited after him")
    }).catch((err)=>{
        res.send(err)
    })
        
})

app.get('/add',(req,res)=>{
    res.render('addContenders')
})


//remember to write the function  in the fake api mode also
app.listen(4444,()=>{
    console.log("server started on http://localhost:4444/")
})