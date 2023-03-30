var express = require('express')
var cors =require('cors')
const mysql = require('mysql2');
const { query } = require('express');
// const path =require('path')
//  const multer=require('multer');
require('dotenv').config();





const connection = mysql.createConnection(
process.env.DATABASE_URL
)

const app=express()
app.use(cors())
app.use(express.json())

console.log('Connected to PlanetScale!')






app.get('/insertmenu/:name/:price/:detail/:typepush',function(req,res,next){
    // insertapi.push(req.body)
     //let json =req.body
 
     var name=req.params.name;
     var price=req.params.price;
     var detail=req.params.detail;
     var type=req.params.typepush;
      var img=req.params.avatar
 
     connection.query(
     'insert into menu (namemenu,price,imgmenu,typefood,menudetail) values (?,?,?,?,?)',     
     [name,price,'',type,detail],
 
         console.log(name),
         console.log(price),
         console.log(detail),
         console.log(type),
         console.log(),
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })



 app.get('/insertcart/:namemenu/:price/:number/:imgmenu/:typepush/:menuid',function(req,res,next){
    // insertapi.push(req.body)
     //let json =req.body
 
     var namemenu=req.params.namemenu;
     var price=req.params.price;
     var number=req.params.number;
     var imgmenu=req.params.imgmenu;
      var typepush=req.params.typepush;
      var menuid = req.params.menuid;
 
     connection.query(
     'insert into priceup (namemenu,price,number,imgmenu,datail,table_id,menu_id) values (?,?,?,?,?,?,?)',     
     [namemenu,price,number,'logo/img/'+imgmenu,'',typepush,menuid],
 
         console.log(namemenu),
         console.log(price),
         console.log(number),
         console.log(imgmenu),
         console.log(typepush),
         console.log(menuid),
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.post('/insertdata',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'insert into employee (name,depart,tel,lv) values (?,?,?,?)',
        [req.body.name,req.body.depart,req.body.tel,req.body.lv],
        function(err,result){
            res.json(result);
            //console.log(result);
            //console.log(field);
        }
    )
    
})




app.get('/selectmenu',function(req,res,next){
    connection.query(

        'select * from menu',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectmenuid/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'select * from menu where id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectcart/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu,datail,menu_id from priceup where table_id=? and checkorder=0',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/selecteditcart/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select * from priceup where id=? ',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})


app.get('/selectdetail/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select namemenu,price,number,(price*number) AS priceupdate,imgmenu,datail,table_id from priceup where id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/selectorder',function(req,res,next){
    connection.query(

        'SELECT tablenumber.table_id,namemenu,price,(price*number) AS numberprice,imgmenu,ordermenu.id,ordermenu.number,ordertable_id,menu_id,orderstatus FROM `ordermenu` INNER JOIN menu ON menu_id = menu.id INNER JOIN tablenumber ON ordertable_id = table_id;',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})





app.put('/updatedata',function(req,res,next){
    //const id=req.params.id;
    connection.query(

        'UPDATE employee SET name=?,depart=?,tel=?, lv=? where id=?',
        [req.body.name,req.body.depart,req.body.tel,req.body.lv,req.body.id],
        function(err,result){
            res.json(result);
            //  console.log(result);
            //console.log(field);
        }
    )
    
})


 const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'image')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname))
    }
 })
 const upload=multer({storage:storage}) 

app.post("/upload",upload.single('image'),(req,res)=>{
    res.send("Image upload complete");
})



// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
// if (req.url == '/upload') {
// var form = new formidable.IncomingForm();
// form.parse(req, function (err, fields, files) {
// var oldpath = files.filetoupload.path;//ตำแหน่งที่เราเลือกต้นทาง
// var newpath = 'image/' + files.filetoupload.name;//ตำแหน่งปลายทาง
// fs.rename(oldpath,newpath, function (err) {
// if (err) throw err;
// res.write('Upload Complete!');
// res.end();

// });
// });
// }
// });



app.listen(3000,function(){
    console.log('enable port 3000')
})
