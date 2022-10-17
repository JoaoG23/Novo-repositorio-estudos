const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [

    {
    id: 0,
    name: "João Guilherme",
    phone: "31 7878-7878",
    },

    {
        id: 1,
        name: "Chales",
        phone: "31 00000-0000",
    },

    {
        id: 2,
        name: "Mondelez",
        phone: "31 2222-7787",
    }
];

let midleWarePagAbout = (req , resp) => {

    resp.render('about');
}

app.set("views" , path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req , resp ) => {

    resp.render('usuario',{ users });

});

app.get("/about" ,midleWarePagAbout);

app.listen(3000, function() {
    console.log(" Serve Ligado porta 3000");
});