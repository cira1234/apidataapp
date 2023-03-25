// var express = require('express')
// var cors =require('cors')
// const mysql = require('mysql2');


// const connection =mysql.createConnection({

//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "member"
// });

// const app=express()
// app.use(cors())
// app.use(express.json())



// app.post('/insertdata',function(req,res,next){
//     const id=req.params.id;
//     connection.query(

//         'insert into employee (name,depart,tel,lv) values (?,?,?,?)',
//         [req.body.name,req.body.depart,req.body.tel,req.body.lv],
//         function(err,result){
//             res.json(result);
//             //console.log(result);
//             //console.log(field);
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