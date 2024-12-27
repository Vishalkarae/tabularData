const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());  // Allow cross-origin requests (for local dev)

const data = [
  { id: 1, name: 'Alice', age: 30, city: 'New York' },
  { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Charlie', age: 35, city: 'Chicago' }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});