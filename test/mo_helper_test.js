const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {

    mongoose.connect("mongodb://localhost/mongotube",
        { useNewUrlParser: true });

    mongoose.connection
        .once('open', () => {
            // console.log("connected")
            done();
        })
        .on('error', (error) => {
            console.log("this is the issue: ", error)
        })
})



// opening connection

