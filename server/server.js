import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN, 'http://localhost:5173'],
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
