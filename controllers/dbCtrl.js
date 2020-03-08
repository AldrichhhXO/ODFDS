/**
 * dbCtrl.js
 *
 * 3/6/2019
 * CS160 - ODFDS Project
 * Database controller that connects to the ODFDS database.
 */

const mysql = require('mysql'); // Import mysql package.
var db;
/** Connects to the database. */
function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host: process.env.DB_ENDPOINT || "localhost",
            user: process.env.DB_USER || "g3",
            password: process.env.PASSWORD || "cs160G3!",
            database: process.env.DATABASE ||'ODFDS'
        });
        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();
