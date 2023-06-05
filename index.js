var express = require('express')
var cors =require('cors')
const mysql = require('mysql2');
const { query } = require('express');
require('dotenv').config();





const connection = mysql.createConnection(
process.env.DATABASE_URL
)

const app=express()
app.use(cors())
app.use(express.json())

console.log('Connected to PlanetScale!')


app.get('/insertmenu/:name/:price/:avatar/:detail/:typepush',function(req,res,next){
    
     var name=req.params.name;
     var price=req.params.price;
     var detail=req.params.detail;
     var type=req.params.typepush;
      var img=req.params.avatar;
 
     connection.query(
     'insert into menu (namemenu,price,imgmenu,typefood,menudetail) values (?,?,?,?,?)',     
     [name,price,img,type,detail],
 
         console.log(name),
         console.log(price),
         console.log(detail),
         console.log(type),
         console.log(img),
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })



app.get('/insertuser/:name/:email/:pass/:tel',function(req,res,next){
    
     var name=req.params.name;
     var email=req.params.email;
     var pass=req.params.pass;
     var tel=req.params.tel;
    
 
     connection.query(
     'insert into usermember (name,email,pass,tel) values (?,?,?,?)',     
     [name,email,pass,tel],
 
    
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })



app.get('/inserttable/:tablenumber',function(req,res,next){
    
     var table=req.params.tablenumber;
 
     connection.query(
     'insert into tablenumber (active) values (?)',     
     [table],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/checkorder/:check',function(req,res,next){
    
     var status=req.params.check;
 
     connection.query(
     'update priceup set checkorder=1 where table_id=? ',     
     [status],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/editnumber/:number/:id',function(req,res,next){
    
     var number=req.params.number;
    var id=req.params.id;
 
     connection.query(
     'update priceup set number=? where id=? ',     
     [number,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })




app.get('/editnamemenu/:namemenu/:id',function(req,res,next){
    
    var id=req.params.id;
    var namemenu=req.params.namemenu;

 
     connection.query(
     'update menu set namemenu=? where id=?',     
     [namemenu,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/editprice/:price/:id',function(req,res,next){
    
    var id=req.params.id;
    var price=req.params.price;

 
     connection.query(
     'update menu set price=? where id=?',     
     [price,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/editdetail/:detail/:id',function(req,res,next){
    
    var id=req.params.id;
    var detail=req.params.detail;

 
     connection.query(
     'update menu set menudetail=? where id=?',     
     [detail,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/editimage/:avatar/:id',function(req,res,next){
    
    var id=req.params.id;
    var imgmenu=req.params.avatar;

 
     connection.query(
     'update menu set imgmenu=? where id=?',     
     [imgmenu,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/edittype/:typefood/:id',function(req,res,next){
    
    var id=req.params.id;
    var typefood=req.params.typefood;

 
     connection.query(
     'update menu set typefood=? where id=?',     
     [typefood,id],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/inserttypefood/:tablenumber',function(req,res,next){
    
     var table=req.params.tablenumber;
 
     connection.query(
     'insert into foodtype (nametype) values (?)',     
     [table],
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })


app.get('/finnishorder/:id',function(req,res,next){
    
    var id=req.params.id;
    var price=req.params.price;

 
     connection.query(
     'update priceup set checkorder=2 where id=?',     
     [id],
 
 
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
     [namemenu,price,number,imgmenu,'',typepush,menuid],
 
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


app.get('/selectuser',function(req,res,next){
    connection.query(

        'select * from usermember',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectuserid/:email/:pass',function(req,res,next){
    
    var email=req.params.email;
    var pass=req.params.pass;

 
     connection.query(
     'select * from usermember where email=? and pass=?',[email,pass],     
     console.log("true");
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             console.log("true");
             //console.log(field);
         }
     )
     
 })


app.get('/showprofile/:email',function(req,res,next){
    
    var email=req.params.email;
 

 
     connection.query(
     'select * from usermember where email=?',[email],     
     
 
 
         function(err,result){
             res.json(result);
             console.log(result);
             //console.log(field);
         }
     )
     
 })




app.get('/detailfinnish/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select id,namemenu,price,number,imgmenu,table_id,(price*number) AS totalprice from priceup where id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/selectmenufinnish',function(req,res,next){
    connection.query(

        'select id,namemenu,price,number,imgmenu,table_id,(price*number) AS totalprice from priceup where checkorder=2',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/search/:typefood',function(req,res,next){
     const typefood=req.params.typefood;
    connection.query(

        'select * from menu where typefood=?',[typefood],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})



app.get('/selectorder',function(req,res,next){
    connection.query(

        'select * from priceup where checkorder=1',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/selecttable',function(req,res,next){
    connection.query(

        'select * from tablenumber',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})



app.get('/selectfoodtype',function(req,res,next){
    connection.query(

        'select * from foodtype',
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
        'select menu.id,table_id,menu.namemenu,menu.price,menu.imgmenu,menu.typefood,menu.menudetail from menu LEFT join priceup on menu.id = menu_id where menu.id=?',[id],
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

        'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu,datail,menu_id,table_id from priceup where table_id=? and checkorder=0',[id],
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

app.get('/allcart',function(req,res,next){
 connection.query(

     'select * from priceup  ',
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})


app.get('/selectorderid/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select id,namemenu,price,number,(price*number) AS priceupdate,imgmenu,datail,table_id from priceup where id=? and checkorder=1',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})



app.get('/deletemenu/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from menu where id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/deleteall',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from priceup where checkorder=2',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/deletehistory/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from priceup  where id=? and checkorder=2',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/deletetable/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from tablenumber where table_id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/deletetype/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from foodtype where id=?',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/deleteorder/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from priceup where id=? and checkorder=1',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/deletecart/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(
        'delete from priceup where id=? ',[id],
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


//  const storage=multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'image')
//     },
//     filename:(req,file,cb)=>{
//         console.log(file)
//         cb(null,Date.now()+path.extname(file.originalname))
//     }
//  })
//  const upload=multer({storage:storage}) 

// app.post("/upload",upload.single('image'),(req,res)=>{
//     res.send("Image upload complete");
// })



// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
// if (req.url == '/upload/:data') {
//  const files=req.params.data;
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
