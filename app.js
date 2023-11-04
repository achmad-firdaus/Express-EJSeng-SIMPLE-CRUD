const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
// Import the method-override middleware
const methodOverride = require('method-override'); 

// Configuration
const config = require('./config/config');

// Middleware
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/authMiddleware');


// Use the method-override middleware
console.log(methodOverride('_method'));
app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*  
*   Configuring EJS as the view engine
*   Serving static files from the "public" directory
*   Using express-ejs-layouts for layouts
*   Specifying the layout file name (without the extension)
*/  
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.set('layout', 'layout');



// Routes
const indexRoute = require('./routes/indexRoute');
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
