module.exports = {
    HOST: "localhost",
    USER: "Users",
    PASSWORD: "",
    DB: "dbname",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };