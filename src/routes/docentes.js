const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const docentes = await pool.query('select * from docentes');
    //res.send('oy yeah');
    res.render('docentes/agregar',{docentes});
});

router.post('/agregar', async(req,res) => {
    
    const {nombre_docente,edad,correo} = req.body
    const newdocente ={nombre_docente,edad,correo};

    await pool.query('insert into docentes set ?',[newdocente]);
    res.redirect('/docentes/consultar');
});


router.get('/consultar', async(req,res) => {
    const docentes = await pool.query('select * from docentes');
    //res.send('oy yeah');
    res.render('docentes/consultar',{docentes});
    
});

router.get('/eliminar/:id_docente',async(req,res) => {
    const {id_docente} = req.params;
    const docente = await pool.query('delete from docentes where id_docente=?',[id_docente]);
    res.redirect('/docentes/consultar');
});

router.get('/modificar',(req,res) => {
    //res.send('oy yeah');
    res.render('docentes/modificar');
});

module.exports = router;