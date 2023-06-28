const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db.js');


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
connectDB();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
