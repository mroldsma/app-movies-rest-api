import express, {Router} from 'express';
const router = Router();
import movies from '../sample.js';



router.get('/', (req,res)=>{
  res.json(movies)
});

router.post('/', (req, res)=>{
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating){
    const id = movies.length + 1;
    const newMovie = {...req.body, id};
    movies.push(newMovie);
    res.send(movies)
  }
  else{
    res.send('mal ahi')
  }
});

router.delete('/:id', (req,res)=>{
  console.log(req.params)
  res.send('chauchi')
})



export default router;