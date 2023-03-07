var express = require('express');
var router = express.Router();
const bd = require('../models/suscriptores');
var mysql = require('mysql2');

let conexion = bd

/* GET home page. */
 router.post('/', function (req, res, next) {
    console.log(req.body)
    var post = req.body;
    var query = conexion.query('INSERT INTO personas SET ?', post, function (error, results, fields) {
        if (error) throw error;
        // Neat!
    });
    console.log(query.sql);
});



module.exports = router;
