const express =require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('',function(req,res){
    Rental.find({},function(err,Foundrentals){
        res.json(Foundrentals);
    });

});

router.get('/:id',function(req,res){
    const rentalId = req.params.id;
        console.log(rentalId);
    Rental.findById(rentalId,function(err,FoundRental){
        
        if(err){
            res.status(422).send({errors: [{title:'Rental Errors',detail:'could not find rental'}]});
        }
        
        res.json(FoundRental);


    });
});



module.exports=router;