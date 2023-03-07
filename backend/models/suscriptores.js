var mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected..!!");
    con.query("CREATE DATABASE IF NOT EXISTS suscriptores", function (err, result) {
        if (err) throw err;
        console.log("Database Created..!!");
    });

    con.query("USE suscriptores", (err, result) => {
        if (err) throw err;
        console.log("Using DataBase")
    })

    con.query("CREATE TABLE IF NOT EXISTS personas( nombre VARCHAR(50), email VARCHAR(80))", (err, result) => {
        if (err) throw err;
        console.log("Tabla creadas");
    })
});

module.exports = con;