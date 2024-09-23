const express= require('express');
const cors= require('cors');
const connectDB= require('./connect');

const app= express();
app.use(cors({origin:['http://localhost:5173']}));
//json parser
app.use(express.json());
connectDB();

app.use('/api/auth',require('./routes/user.route'));

app.listen(5000,()=>console.log('server started'))