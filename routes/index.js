var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mensaje', function(req,res,next){
  res.render('prueba',{"txtMensaje":"","msg":""});
});

var usersRegistered = [];

router.post('/mensaje',function(req,res,next){
  console.log(req.body);
    usersRegistered.push(req.body.txtEmail);
    // Para que conozcan map funcion de un arreglo
    var msgs = usersRegistered;
    var rtObject = {}; // {"txtEmail": req.body.txtEmail, "msg":msgs};
    rtObject.txtEmail = req.body.txtEmail;
    rtObject.msg= msgs;
  res.render('register', rtObject);
});

router.get('/api/usuarios', function(req,res,next){
  var usuarios = [
    {"nombre":"Italo"},
    {"apellido":"Palazzese",},
    {"cuenta":0801199620983,},
    {"telefono":32525553}
  ]
  res.json(usuarios);

});

module.exports = router;
