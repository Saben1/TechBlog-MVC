// Import dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Create the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// View engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
