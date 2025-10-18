import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
