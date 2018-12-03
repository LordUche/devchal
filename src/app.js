import express from 'express';
import * as bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/red-flags', (req, res) => {
  res.status(200).json({ status: 'success', data: [] });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});