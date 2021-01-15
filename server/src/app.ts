import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/error-handler';
dotenv.config();
import router from './routes';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
