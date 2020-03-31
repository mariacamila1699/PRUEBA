const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio 
const app=express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views' ));

//--congiguracion de handlebars--//
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    estudianteDir: path.join(app.get('views'), 'estudiante'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');


//peticiones - midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//variables globales
app.use((req,res,next)=> {
    next();
});


//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/estudiante',require('./routes/estudiante'));
app.use('/docentes',require('./routes/docentes'));
app.use('/notas',require('./routes/notas'));
app.use('/materia',require('./routes/materia'));
app.use('/asigar_materias',require('./routes/asignar_materias'));
app.use('/periodo_academico',require('./routes/periodo_academico'));




// public
app.unsubscribe(express.static(path.join(__dirname,'public')));



//como iniciamos el servidor
app.listen(app.get('port'),()=> {
    console.log('server on port',app.get('port'));
})
