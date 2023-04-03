import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
export default app;