const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'pass',
    database: 'mytestdb'

})
//we are not writing connection.close after any function because we want to be constantly
//in touch with the user who may be refreshing the browser multiple times, we do not want the
//connection with the user to close at any moment if we require continuous fetching of data
function getAllcontenders() {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM worldCup`,
            function (err, rows,cols) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(rows);
                }
            }
        )
    })


}

function addContenders(team, ranks, titles) {

    return new Promise(function (resolve, reject) {
        connection.query(
            `INSERT INTO worldCup (team, ranks, titles) values(?,?,?)`,
            [team,ranks,titles],
            function (err, results) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve();
                }
            }
        )
    })


}




exports= module.exports ={
    getAllcontenders,
    addContenders
}