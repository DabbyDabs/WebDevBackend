const mysql= require('mysql2');

//to check the sql queries 
const connection= mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'pass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS worldCup(
        team varchar(20),
        ranks int,
        titles int);

    `,
    function(err,results){
        if(err){
            console.error(err);
        }
        else{
            console.log("table created successfully!")
        }
        connection.close();
    }
)