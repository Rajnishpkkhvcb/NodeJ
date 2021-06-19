const express=require('express');

const router=express.Router();
router.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
  })


router.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
  });

module.exports=router;