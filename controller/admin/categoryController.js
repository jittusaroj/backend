import categoryModel from '../../model/admin/categoryModel.js'
export const addCategory = async (resquest, response) => {
    try {
         
        const category = await categoryModel({
            name:resquest.body.title,
            img:resquest.file.originalname,
            path:resquest.file.path,
        })
        category.save()
        response.status(200).json(category)
    }
    catch (error) {
        response.status(401).send("something  wrong")
    }
}
export const Category = async (resquest, response) => {
    try {
        const categories = await categoryModel.find()
        response.status(200).json(categories)
    }
    catch (error) {
        response.status(401).send("something  wrong")
    }
}
export const updateCategory = async (resquest, response) => {
    const id = resquest.body.id

    try {
        if(resquest.file){
            var category = await categoryModel({
            name:resquest.body.title,
            img:resquest.file.originalname,
            path:resquest.file.path,
        })}else{
            var category = await categoryModel({
            name:resquest.body.title,
        })
        }
        const responsedata = await categoryModel.findByIdAndUpdate(id, category)
        response.status(200).json(responsedata)
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const getCategory = async (resquest, response) => {
    const id = resquest.params.id
    try {
        const category = await categoryModel.findById(id)
        response.status(200).json(category)
    }
    catch (error) {
        response.status(401).send("something wrong uyfyu")
    }
}
export const deleteCategory = async (resquest, response) => {
    const id = resquest.params.id
    try {
        const category = await categoryModel.deleteOne({ _id: id })
        response.status(200).send("success")
    }
    catch (error) {
        response.status(401).send("something wrong uyfyu")
    }
}