const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

const list = ['Maicon','Carlos','Maria'];

console.log(list);

setTimeout( () => {
    list.push('JOVANILDO');
},2000);

app.get('/list' , (req , resp ) => {
    resp.send(list);
});

app.use('/', express.static(path.join(__dirname,'public')));

app.listen(3000,()=>{
    console.log('running');
});