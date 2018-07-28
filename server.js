const express = require('express');
const app = express();
const path = require('path');


const posts = require('./server/routes/posts');

//Using middleware
app.use(express.static(__dirname + '/app'));
app.use('/posts', posts);

//All other requests caught and sent to index.html
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/app/index.html'))
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("server running on port 3000");