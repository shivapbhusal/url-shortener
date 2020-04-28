// Require express module
const express = require("express");
const app = express();
const PORT = 7000;
// Start server  on port 7000
app.listen(PORT, () =>{
	console.log('Server started on port', PORT);
});