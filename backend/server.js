const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '..', 'build')));

// Use the routes defined in the routes folder
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
