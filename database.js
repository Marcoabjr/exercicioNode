const mongoose = require('mongoose');

const conectdb = async() => {
    try{
        await mongoose.connect('mongodb+srv://marcoabjr:xb369582@cluster0.oc1ahd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlPaser: true,
            useUnifiedTopology: true,
        });
    } catch(error){
        console.error('Conexão com o mongo db não foi realizada com sucesso!!', error.message);
        process.exit(1);
    }
};

module.exports= conecDb;