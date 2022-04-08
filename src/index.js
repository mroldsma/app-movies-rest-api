import express from 'express';
import morgan from 'morgan';
import usersRoutes from './routes/index.routes.js';
import moviesRoutes from './routes/movies.routes.js';

const app = express();


// settings
app.set('port', process.env.port || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use(usersRoutes);
app.use('/api/movies', moviesRoutes);



// starting server
app.listen(app.get('port'), ()=>{
  console.log(`server on port ${app.get('port')}`)
});



