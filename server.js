import express from 'express'
import cors from 'cors'
import {connectDB} from './config/database.js'
import playerRoutes from './routes/playerRoutes.js'
import teamRoutes from './routes/teamRoutes.js'

connectDB();


const app = express();
app.use(express.json());
app.use(cors())

app.use('/api', playerRoutes)
app.use('/api', teamRoutes)

const PORT = process.env.PORT || 5151

app.listen(PORT, () => {
 console.log(`Listening to PORT: ${PORT}`)
});

app.get('/', (req, res) => {
 res.send('Welcome to express backend')
})

