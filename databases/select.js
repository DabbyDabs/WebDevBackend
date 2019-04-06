//to check the sql queries
const mysql= require('mysql2');

const connection= mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'pass'
})

connection.query(
    `SELECT * from worldCup;
`,
    function(err,rows,columns){
        if(err){
            console.error(err);
        }
        else{
            console.log(rows)
            console.log(columns)
            console.log("tables shown successfully!")
        }
        connection.close();
    }
)