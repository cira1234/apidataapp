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


// app.put('/updatedata',function(req,res,next){
//     //const id=req.params.id;
//     connection.query(

//         'UPDATE employee SET name=?,depart=?,tel=?, lv=? where id=?',
//         [req.body.name,req.body.depart,req.body.tel,req.body.lv,req.body.id],
//         function(err,result){
//             res.json(result);
//             //  console.log(result);
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