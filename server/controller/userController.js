const { User } = require("../indexdatabase");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users && users.length === 0) {
      res
        .status(404)
        .json({ message: "Impossible de trouver la liste des utilisateurs." });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({
      message:
        "Erreur Serveur: Impossible de trouver la liste des utilisateurs.",
    });
  }
};

module.exports = {
  getAllUsers,
};
