const express= require('express');
const app = express(); 
const connectDB = require('./config/connectDB.js')
const userRouters = require('./routes/user')
const articleRoutes = require('./routes/categories')

const appointmentRoutes = require('./routes/appointment') 
const contactUsRoutes = require('./routes/contactUs') 


connectDB();

app.use(express.json());    


app.use('/api/user',userRouters);

app.use('/api/articles',articleRoutes);

app.use('/api/appointment',appointmentRoutes);

app.use('/api/contactUs',contactUsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT,(error)=>{ 
                    error ?  console.log(error) : console.log(`server is running on port ${PORT}`)
})

