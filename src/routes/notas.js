const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const notas = await pool.query('select * from  notas');
    //res.send('oy yeah');
    res.render('notas/agregar',{notas});
});


router.get('/consultar',(req,res) => {
    //res.send('oy yeah');
    res.render('notas/consultar');
});

router.get('/eliminar',(req,res) => {
    //res.send('oy yeah');
    res.render('notas/eliminar');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('notas/modificar');
});

module.exports = router;