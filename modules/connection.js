// require('dotenv').config();
var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    console.log('env connection string');
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/foodDb';
}

module.exports = connectionString;
