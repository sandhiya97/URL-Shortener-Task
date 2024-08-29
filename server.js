import express from 'express';
import mongoose from 'mongoose';
import urlRoutes from './src/routes/urlRoutes.js';

const app = express();
const PORT = 3000;


app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.use('/api', urlRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
