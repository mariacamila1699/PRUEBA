const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const materia = await pool.query('select * from materia');
    //res.send('oy yeah');
    res.render('materia/agregar',{materia});
});

router.post('/agregar', async(req,res) => {
    
    const {materia} = req.body
    const newmateria ={materia};

    await pool.query('insert into materia set ?',[newmateria]);
    res.redirect('/materia/agregar');
});


router.get('/consultar',(req,res) => {
    //res.send('oy yeah');
    res.render('materia/consultar');
});

router.get('/eliminar/:id_materia',async(req,res) => {
    const {id_materia} = req.params;
    const materia = await pool.query('delete from materia where id_materia=?',[id_materia]);
    res.redirect('/materia/agregar');

});    

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('materia/modificar');
});

module.exports = router;