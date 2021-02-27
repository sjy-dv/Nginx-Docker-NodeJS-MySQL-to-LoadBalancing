const express = require('express');
const app = express();

const mysql = require('mysql');

app.get('/', (req,res) => {

    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        charset: 'utf8'
    })

    connection.connect((err) => {
        if(err){
        return res.send('error');
        }
        return res.send('successs');
    })

    connection.query('insert into test values("aaa","111")');
});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('ser on');
})