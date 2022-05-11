const express = require("express");

module.exports = (prisma, sellers) =>{

    
    //Getting data form sellers model
    sellers.use(express.json())
    sellers.get("/sellers",async(req, res)=>{
        console.log("working");
        try{
            const sellers = await prisma.seller.findMany(
                {
                    include:{
                        products:true
                    }
                }
            );
            res.status(200).json(sellers);
            console.log(sellers);
        }catch(err){
            console.log(err);
            res.status(500).json(
                err
            )
        }

    });

    sellers.post('/sellers', async(req, res) => {
        console.log(req.body);
        try{
            const sellers = await prisma.seller.create({
                data:req.body
            })
            res.status(200).json(sellers)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    })


    sellers.patch('/sellers/:id', async(req, res) => {
        const {id} = req.params
        
        try{
            const sellers = await prisma.seller.update({
                where: {id:Number(id)},
                data:req.body
            })
            res.status(200).json(sellers)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    })


    sellers.delete('/sellers/:id', async(req, res) => {
        const {id} = req.params
        
        try{
            const sellers = await prisma.seller.delete({
                where: {id:Number(id)},
                
            })
            res.status(200).json(sellers)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    })

}