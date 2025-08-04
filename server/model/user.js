module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Prénom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Téléphone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MotDePasse: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: { name: "email_unique", msg: "L'email doit être unique." },
      },
      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      role: {
        type: DataTypes.ENUM("utilisateur", "admin"),
        allowNull: true,
        toDefaultValue: "utilisateur",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
      imagePublicId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "User",
      timestamps: true,
    }
  );

  return User;
};
