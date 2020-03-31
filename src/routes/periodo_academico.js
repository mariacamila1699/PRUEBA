const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const periodo = await pool.query('select * from periodo_academico');
    //res.send('oy yeah');
    res.render('periodo_academico/agregar',{periodo});
});

router.post('/agregar', async(req,res) => {
    
    const {periodo} = req.body
    const newperiodo ={periodo};

    await pool.query('insert into periodo_academico set ?',[newperiodo]);
    res.redirect('/periodo_academico/agregar');
});


router.get('/consultar',(req,res) => {
    //res.send('oy yeah');
    res.render('periodo_academico/consultar');
});

router.get('/eliminar/:id_periodo',async(req,res) => {
    const {id_periodo} = req.params;
    const periodo = await pool.query('delete from periodo_academico where id_periodo=?',[id_periodo]);
    res.redirect('/periodo_academico/agregar');

});    

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('periodo_academico/modificar');
});

module.exports = router;