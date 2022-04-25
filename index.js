import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
const PORT = process.env.port || 3002

app.use(cors())

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})