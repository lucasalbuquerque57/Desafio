const Sequelize = require("sequelize")
const sequelize = new Sequelize("desafio_prova", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}