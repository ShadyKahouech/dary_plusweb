const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config/config.json");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: "localhost",
  dialect: "mysql",
});
const User = require("./model/user")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("La connexion a été réalisée avec succès.");
  })
  .catch((err) => {
    console.log("Une erreur est survenue lors de la connexion.", err);
  });
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(" Les tableaux ont été créés avec succès.");
  })
  .catch((err) => {
    console.log(
      "Une erreur est survenue lors de la création des tableaux.",
      err
    );
  });

module.exports = {
  Sequelize,
  sequelize,
  User,
};
