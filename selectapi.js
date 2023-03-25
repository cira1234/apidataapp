// var express = require('express')
// var cors =require('cors')
// const mysql = require('mysql2');


// const connection=mysql.createConnection({

//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "member"
// });

// const app=express()
// app.use(cors())



// app.get('/select',function(req,res,next){
//     connection.query(

//         'select * from employee',
//         function(err,result,field){
//             res.json(result);
//             console.log(result);
//             console.log(field);
//         }
//     )
    
// })
// /*
// app.get('/products/:id',function(req,res,next){
//     res.json({msg:'api connected!'})
// })
// */

// app.listen(5000,function(){
//     console.log('enable port 5000')
// })