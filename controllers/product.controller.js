module.exports = (prisma, products) =>{

    //for getting data form sellers table

    products.get("/sellers/:sellerId/products",async (req, res, next) =>{
        try {
            const {sellerId} = req.params
           
            const product = await prisma.product.findMany(
                {
                    where: {sellerId:Number(sellerId)}
                }
            )
            console.log(product);
            res.status(200).json(product)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    products.post('/sellers/:sellerId/products', async(req, res) => {
        try{
            const { sellerId } = req.params
        const product = await prisma.product.create({
            data:{...req.body,sellerId:Number(sellerId)}
        })
        res.status(200).json(product)
        }catch(err) {
            res.status(500).json({message: err.message})
        }
        
    })
    

    products.patch('/sellers/:sellerId/products/:id', async(req, res) => {
        try{
            const { sellerId,id } = req.params
            console.log(sellerId,id);
            const product = await prisma.product.update({
                where: {
                //     And:[ {
                //         id:Number(id)
                //     },
                //     {
                //         sellerId:Number(sellerId)
                //     } ]
                id:Number(id)
                },
                
                data:req.body
            })
            console.log(product);
        res.status(200).json(product)
        }catch(err) {
            console.log("fails");
            res.status(500).json({message: err.message})
        }
        
    })


    products.delete("/sellers/:sellerId/products/:id", async(req, res)=>{
        try {
            const {sellerId,id} = req.params
            const product = await prisma.product.delete({
                where:{
                    // AND:[ 
                    //         {
                    //             id:Number(id)
                    //         },
                    //         {
                    //             sellerId:Number(sellerId)
                    //         } 
                    //     ]
                    id:Number(id)
                }
            })
            res.status(200).json(product)
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })

}