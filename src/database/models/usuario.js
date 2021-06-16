'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    codigo: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING,
      unique: true,
    },
    nascimento: DataTypes.DATE,
    foto: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};