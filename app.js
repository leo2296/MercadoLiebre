const express = require ('express');
const app = express();
const path = require('node:path');


app.get('/',( req, res ) => {
  const pathHome = path.join(__dirname, 'views/home.html')
  res.sendFile(pathHome)
});
app.get('/register',( req, res ) => {
  const pathHome = path.join(__dirname, 'views/register.html')
  res.sendFile(pathHome)
});
app.get('/login',( req, res ) => {
  const pathHome = path.join(__dirname, 'views/login.html')
  res.sendFile(pathHome)
});

app.use(express.static('public'));
app.listen(3000,() => console.log('Servidor escuchando en el puerto 3000'));
