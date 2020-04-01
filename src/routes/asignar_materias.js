const express = require('express');
const router =  express.Router();
const pool = require('../database');


router.get('/agregar', async(req,res) => {
    const asignar = await pool.query('select * from asigna_materia_docente');
    //res.send('oy yeah');
    res.render('asignar_materias/agregar',{asignar});
});



module.exports = router;