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


app.get('/insertapi/:name/:depart/:tel/:lv',function(req,res,next){
   // insertapi.push(req.body)
    //let json =req.body

    var name=req.params.name;
    var depart=req.params.depart;
    var tel=req.params.tel;
    var lv=req.params.lv;


    connection.query(
    'insert into employee (name,depart,tel,lv) values (?,?,?,?)',     
    [name,depart,tel,lv],

        console.log(name),
        console.log(depart),
        console.log(tel),
        console.log(lv),
        console.log(),


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


app.get('/getid',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select * from menu where id =?',[id],
        function(err,result){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/select',function(req,res,next){
    connection.query(

        'select * from employee',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectmenuid/:id',function(req,res,next){
       var id=req.params.id;
    connection.query(

        'select  *from menu where id=? ',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectdetailorder/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select namemenu,price,(price*number) AS priceupdate,number,imgmenu,datail,table_id from priceup where id=? ',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})


app.get('/selectcart/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu from priceup where table_id=? and checkorder=0',[id],
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

     'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu from priceup where id=? and checkorder=0',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
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


app.get('/pork.jpg',function(req,res,next){
    connection.query(

        'select * from menu',
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




app.get('/users/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select * from employee where id=?',[id],
        function(err,result){
            res.json(result);
            //console.log(result);
            //console.log(field);
        }
    )
    
})



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


/*
app.get('/products/:id',function(req,res,next){
    res.json({msg:'api connected!'})
})
*/

app.listen(3000,function(){
    console.log('enable port 3000')
})
