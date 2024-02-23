const mysql = require('mysql2/promise');

const dbConfig = {
  host: "184.168.102.31",
  user: "assure_pathlabsU",
  password: "dayB8u&,,Ycm",
  database: "assure_pathlabs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Adding error handling to the pool
pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL');
    connection.release();
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });

module.exports = pool;
