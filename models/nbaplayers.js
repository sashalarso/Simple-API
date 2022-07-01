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
        allowNull: false
      },
      rings: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      teams: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated'
    })
  }