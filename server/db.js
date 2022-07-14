const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Manish1.257",
    host: "localhost",
    port: 5432,
    database: "perntodo"

});

module.exports = pool;