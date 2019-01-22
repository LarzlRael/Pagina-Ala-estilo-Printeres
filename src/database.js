const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/finteres_tutorial',{
    useNewUrlParser: true,
})
    .then(db=>console.log('DB esta conectado'))
    .catch(err=>console.error(err))
    
