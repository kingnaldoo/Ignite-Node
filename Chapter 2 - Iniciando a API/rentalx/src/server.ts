import express from 'express';
<<<<<<< HEAD

const app = express(); 

app.get('/', (req, res) => { 
    res.json({message: "hello world"})
})

app.listen(3000, () => console.log('O servidor está rodando😎')); 
=======
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(3000, () => console.log('O servidor está rodando 😎'));
>>>>>>> 2009172d8be78d9710b146322d8f1e4f72c198f8
