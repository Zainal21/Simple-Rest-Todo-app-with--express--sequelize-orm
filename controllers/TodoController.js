const {todo} = require('../models')
module.exports = {
  index : async (req, res) => {
    const todos = await todo.findAll();
    return res.json(todos)
  },
  show:async (req, res) => {
    let _id = req.params.id;
    const todos = await todo.findByPk(_id);
    return res.json(todos)
  },
  store: async (req, res) => {
    const {nama} = req.body
    // set created data using ORM create
    return await todo.create({
      nama: nama
    }).then(function(todos){
      if(todos){
        return res.json({
          message: 'created data successfully',
          data:todos
        });
      }else{
        return res.send('error')
      }
    });
  },
  update: async (req,res) => {
    const {nama} = req.body
    // set created data using ORM update
    return await todo.update({
      nama:nama
    },{
      where:{
        id:req.params.id
      }
    }).then(function(todo){
      if(todo){
        return res.json({
          message: 'updated data successfully',
          data:todo
        });
      }else{
        return res.send('error');
      }
    });
  },
  destroy: async (req, res) => {
    // set created data using ORM destroy
    return await todo.destroy({
      where:{
        id:req.params.id
      }
    }).then(function(data){
      if(data){
        return res.json({
          message: 'deleted data successfully',
          data:data
        });
      }else{
        return res.send('error');
      }
    })
  }
}