const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');
const { format } = require('timeago.js');


//inicializacion
require('./database');


//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middelwares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    },
    destination: path.join(__dirname, 'public/img/uploads')
});
app.use(multer({ storage: storage }).single('image'));



//variables globales
app.use((req, res, next) => {
    app.locals.format = format;
    next();
})
//rutas

app.use(require('./routes/index'));

//rutas estaticas
app.use(express.static(path.join(__dirname,'public')));

//servidor
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});