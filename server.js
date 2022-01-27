const express = require('express');
const mainRoutes = require ('./routes/mainRoutes');



const app = express();



app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.static('images'));

app.use(mainRoutes);






const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
