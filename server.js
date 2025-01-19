import express from 'express'

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.get('/', (req, res) => {
 res.send('Basketball League Backend is Running!');
});

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});