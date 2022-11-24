const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const videos = [
'x7rL7rPfg5w',
'IMh-kBlmSkc',
'8tI1_KlO6xI',

];

app.get('/api/videos', ( req , res ) => {
    res.send(videos)
})

if (process.env.NODE_ENV != 'development') {
    
    
    app.use( express.static( path.join(__dirname,'front/build') ));
    
    app.get('*', ( req , res ) => {
        res.sendFile( path.join(__dirname,'front/build/index.html', ( error ) => {
            if( error ) {
                res.status(500).send( error );
            }
        }));
    });
    
}

app.listen(3000 , () => {
    console.info('Running');
})