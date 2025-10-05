const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Team Sync Hub - your collaboration starts here!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});