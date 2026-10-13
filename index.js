const express = require('express');
const app = express();

const HOST = process?.env?.HOST || "0.0.0.0";
const PORT = process?.env?.PORT || 8080;

app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});