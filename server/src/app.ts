import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
