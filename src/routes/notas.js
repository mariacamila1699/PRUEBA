const express = require('express');
const router =  express.Router();


router.get('/agregar',(req,res) => {
    //res.send('oy yeah');
    res.render('notas/agregar');
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