//to check the sql queries
const mysql= require('mysql2');

const connection= mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'pass'
})

let insert={
    team: process.argv[2],
    ranks:parseInt(process.argv[3]),
    titles:parseInt(process.argv[4])
}

connection.query(
    `INSERT INTO worldCup (team,ranks,titles) VALUES (
        '${insert.team}',
        '${insert.ranks}',
        '${insert.titles}');

    `,
    function(err,results){
        if(err){
            console.error(err);
        }
        else{
            console.log("inserted into table successfully!")
        }
        connection.close();
    }
)