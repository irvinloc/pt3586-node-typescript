var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");

const DBSOURCE = "./db.sqlite3";
try {
  var dbExists = fs.statSync(DBSOURCE);

  console.log("database exists");
} catch (error) {
  console.error("error opening database", err.code);
}

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log("error opening databasae", err.code);
  }
});

module.exports = db;
