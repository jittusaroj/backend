import productModel from '../../model/admin/productModel.js'
export const addProduct=async(resquest,response)=>{
   try{
    let filesArray = [];
    
    resquest.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
            }
            filesArray.push(file);
        });
        
        const product = new productModel({
            name:resquest.body.name,
            mrp:resquest.body.mrp,
            category:resquest.body.category,
            price:resquest.body.price,
            desc:resquest.body.desc,
            img:filesArray
        });
    
        product.save()
        response.status(200).json(product)
    }
   catch(error){
        response.status(401).send("something wrong")
    }
}


export const Product=async(resquest,response)=>{
   try{
    const products=await productModel.find()
        response.status(200).json(products)
    }
   catch(error){
        response.status(401).send("something wrong")
    }
}
export const getProduct=async(resquest,response)=>{
    const id=resquest.params.id
    try{
        const product=await productModel.findById(id)
            response.status(200).json(product)
        }
    catch(error){
            response.status(401).send("something wrong")
        }
}
export const updateProduct=async(resquest,response)=>{
    const id=resquest.params.id
    try{
        var respose=await productModel.findById(id)
        
        let filesArray = [];
    
            resquest.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
            }
            filesArray.push(file);
        });
        
        if(resquest.files.length!=0){
            var productnew = new productModel({
            name:resquest.body.name,
            mrp:resquest.body.mrp,
            category:resquest.body.category,
            price:resquest.body.price,
            desc:resquest.body.desc,
            img:filesArray
        });
        }else{
           
            var productnew = new productModel({
            name:resquest.body.name,
            mrp:resquest.body.mrp,
            category:resquest.body.category,
            price:resquest.body.price,
            desc:resquest.body.desc,
            img:respose.img
        });
        }
        
        const data=await productModel.findByIdAndUpdate(id,productnew)
            response.status(200).json(data)
        }
    catch(error){
            response.status(401).send("something wrong")
        }
}

export const deleteProduct=async(resquest,response)=>{
    const id=resquest.params.id
    try{
        const product=await productModel.deleteOne({_id:id})
            response.status(200).send("success")
        }
    catch(error){
            response.status(401).send("something wrong")
        }
}