const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

//app.get('/',(req,res)=>{
//    res.render(index.html);
//});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
});
