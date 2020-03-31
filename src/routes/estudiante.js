const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const estudiantes = await pool.query('select * from estudiantes');
    //res.send('oy yeah');
    res.render('estudiante/agregar',{estudiantes});
});

router.post('/agregar', async(req,res) => {
    
    const {nombre_estudiante,edad,correo} = req.body
    const newestudiante ={nombre_estudiante,edad,correo};

    await pool.query('insert into estudiantes set ?',[newestudiante]);
    res.redirect('/estudiante/agregar');
});

router.get('/consultar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/consultar');
});

router.get('/eliminar/:id_estudiantes',async(req,res) => {
    const {id_estudiantes} = req.params;
    const estudiante = await pool.query('delete from estudiantes where id_estudiantes=?',[id_estudiantes]);
    res.redirect('/estudiante/agregar');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('estudiante/modificar');
});

module.exports = router;