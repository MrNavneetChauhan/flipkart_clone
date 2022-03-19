
const getAll = (model)=>async(req,res)=>{
    const item = await model.find().lean().exec();
    return res.status(200).send(item)
};


const getOne = (model)=>async(req,res)=>{
    const item = await model.findById(req.params.id).lean().exec();
    return res.status(200).send(item)
};


const post = (model)=>async(req,res)=>{
    const item = await model.create(req.body);
    return res.status(201).send(item)
}


const patch = (model)=>async(req,res)=>{
    const item = await model.findByIdAndUpdate(req.params.id,req.body,{new:1}).lean().exec();
    return res.status(201).send(item)
}

const remove = (model)=>async(req,res)=>{
    const item = await model.findByIdAndDelete(req.params.id);
    return res.status(204).send(item)
}

module.exports = (model)=>({
    get:getAll(model),
    getOne:getOne(model),
    post:post(model),
    patch:patch(model),
    delete:remove(model)
})