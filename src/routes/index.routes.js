import express, { Router } from 'express';
const router = Router();

router.get('/', (req, res)=>{
  res.json({
    "title": "matrix"
  })
});


export default router;