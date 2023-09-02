import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import DalleRouter from './routes/dalle.js';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/dalle", DalleRouter);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E" })
// })

app.listen(3000, () => console.log('Server has started on port 8080'))