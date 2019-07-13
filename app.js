const express=require('express')

const bodyParser=require('body-parser');

const userRouter=require('./routes/user.js');
const demo=require('./routes/demo.js');
const pro=require('./routes/pro.js');

let app=express();
app.listen(8080);

app.use(express.static('public'));
app.use(express.static('myajax'));
app.use(express.static('mypro'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/user',userRouter);
app.use('/demo',demo);
app.use('/pro',pro);