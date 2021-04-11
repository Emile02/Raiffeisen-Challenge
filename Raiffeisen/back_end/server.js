var express = require('express');
var mongoose = require('mongoose');
var app = express();
var dbUrl = 'mongodb+srv://dbMax:cv2rt7pl@cluster0.cuxxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
});

var Message = mongoose.model('Message', { name : String, message : String})

app.use(express.static(__dirname));

var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
