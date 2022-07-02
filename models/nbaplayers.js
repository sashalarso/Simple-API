module.exports = (sequelize, DataTypes) => {
    return sequelize.define('NBAPlayers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("position").toUpperCase()
        }
      },
      rings: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          isInt : { msg : 'Utilisez uniquement des nombres entiers'},
          min : {
            args : [0],
            msg : 'The number of rings must be positive'

          }
        }
      },
      teams: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("teams").split(',')
        }
      }
      
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated'
    })
  }