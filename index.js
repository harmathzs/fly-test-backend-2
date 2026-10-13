require('dotenv').config()

const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')
const app = express();

app.use(cors())
app.use(express.json())

const HOST = process?.env?.HOST || "0.0.0.0";
const PORT = process?.env?.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
