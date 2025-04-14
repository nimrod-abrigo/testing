const express = require('express');
const sampleRoute = require('./routes/sampleRoute');
const app = express();

app.use(express.json());
app.use('/api',sampleRoute);

app.listen(6000, ()=>{console.log(`SERVER RUNNING ON PORT 6000`)})