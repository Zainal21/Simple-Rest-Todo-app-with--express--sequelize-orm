module.exports = (sequelize,DataTypes) => {
  // define model
  const todo = sequelize.define('todo',{
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      unique:true,
      autoIncrement:true
    },
    nama:{
      type: DataTypes.STRING,
      allowNull:false
    },
    createdAt:{
      field:'created_at',
      type: DataTypes.DATE,
      allowNull:false
    },
    updatedAt:{
      field:'updated_at',
      type: DataTypes.DATE,
      allowNull:false
    }
  },{
    tableName:'todo'
  });
  return todo
}