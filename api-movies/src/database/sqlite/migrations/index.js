const createUsers = require("./createUsers")
const sqliteConnection = require("../../sqlite")

async function migrationsRun() {
  const schemas = [
    createUsers,
  ].join('')

  sqliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationsRun