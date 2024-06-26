const express = require('express')
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route')
const Product = require('./models/product.model')


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));



//routes
app.use("/api/products", productRoute)



app.get('/', (req, res) =>{
    
    res.send("Hello from NODE API server api")
});




   
   
    
  

   









mongoose.connect("mongodb+srv://admin:K4nEZyHWzFMqFDY6@backenddb.ibmppvz.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to the db");

app.listen(3000, () =>{
    console.log('server is running on port 3000')
});

})
.catch(()=>{
    console.log("Not Connected");
})

