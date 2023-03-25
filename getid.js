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
// app.get('/users/:id',function(req,res,next){
//     const id=req.params.id;
//     connection.query(

//         'select * from employee where id=?',[id],
//         function(err,result){
//             res.json(result);
//             //console.log(result);
//             //console.log(field);
//         }
//     )
    
// })

// //body คือข้อมูลจากดาต้าเบส ในรูปแบบ json
// //หากต้องการดึงข้อมูลแค่แถวเดียวให้ ใส่ .ตามด้วยชื่อแถว
// app.post('/getid',function(req,res,next){
//     res.json(req.body.id)
// })

// app.put('/users/:id', (req, res) => {
//     const updateIndex = users.findIndex(user => user.id === Number(req.params.id))
//     res.send(`Update user id: '${users[updateIndex].id}' completed.`)
//   })
  
// // app.listen(5000,function(){
// //     console.log('enable port 5000')
// // })