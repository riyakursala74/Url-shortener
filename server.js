const express = require('express');
const bodyParser= require('body-parser');
var mysql = require('mysql');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'webpro'
});
con.connect();

app.get('/', function (req,res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/', function(req,res)
{
  var l=req.body.link;
  console.log("L= ",l);
  var sql="SELECT * FROM nw WHERE m_url=?";
  con.query(sql,l, function(err, rows, fields)
  {

    if (err) throw err;
    else if((rows.length)==0){
      console.log("Not found");
      var sql = "INSERT INTO nw(m_url) VALUES(?)";
               con.query(sql,l, function(err, rows, fields) {
               if(!!err){
               console.log(err);
                 }
                 else
                 {
                   console.log("Here 2");
                   var m=rows.insertId;
                   var id="http://localhost:3000/webpro/"+m;
              res.render('disp',{newUrl:id});
              }
        });
    }
    else{
      console.log("Found");
      var sql="SELECT * FROM nw WHERE m_url=?";
            con.query(sql,l, function(err, rows, fields)
            {
                if(!!err){
                }
                else
                { for (var i in rows) {
                      var m=rows[i].n_id;
                    }
                  var id="http://localhost:3000/webpro/"+m;
             res.render('disp',{newUrl:id});
                }
      });
    }
}
);
});


app.get('/webpro/:i', function(req,res)
{
  var id= (req.params.i);
  var sq = "SELECT m_url FROM nw WHERE n_id=?";
   con.query(sq,id, function(err, rows, fields) {
   if(!!err){
   console.log(err);
  }
  else
  for (var i in rows) {
        res.redirect(rows[i].m_url); }
         });
});
app.listen(3000 , function () {
  console.log('Server started');
});
