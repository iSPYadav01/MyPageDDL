const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define routes for sign-up and sign-in (you'll add these later)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
