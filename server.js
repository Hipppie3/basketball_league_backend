import express from 'express'
import cors from 'cors'
import config from './config/config.js'


const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.DB_PORT || 5151

app.listen(PORT, () => {
 console.log(`Listening to PORT: ${PORT}`)
});

app.get('/', (req, res) => {
 res.send('Welcome to express backend')
})