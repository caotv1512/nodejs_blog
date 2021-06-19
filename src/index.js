const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
console.log(path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




// function array(a) {
//   console.log(a);
// }
// let newArr = array(prompt("insert arr").split(','))


// console.log(newArr);


//  for (let index = 0; index < newArr.length; index++) {
//      console.log(newArr[index]);
//  }
 



