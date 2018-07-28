const express = require('express')
const router = express.Router();

const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com/';

//GET POST
router.get('/', (req, res)=>{
   
    axios.get(`${postAPI}/posts`).then(posts=>{
        console.log(posts.data);
    })
    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection at:', reason.stack || reason);
    })
});

module.exports = router;