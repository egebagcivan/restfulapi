const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://movie_user:egecan3535@cluster0.fyus6.mongodb.net/movie-api', {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

      mongoose.Promise = global.Promise;
};