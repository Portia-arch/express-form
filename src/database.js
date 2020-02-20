// require('dotenv').config();
const { Pool } = require("pg");
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'db',
    password: 'pass',
    port: 5432
});

pool.connect(function(err, res) {
    if(err)
    console.log(err)
    console.log(res)
});

const createTable = async function () {
    try {
        const sql = await pool.query(
          `Create Table visitors(
            ID SERIAL PRIMARY KEY,
            Visitor_Name VARCHAR(100),
            Assistant_Name VARCHAR(100),
            Visitor_Age INTEGER,
            Date_Of_Visit DATE,
            Time_Of_Visit TIME,
            Comments VARCHAR(225)
        );`
        );
        console.log(sql.rows)
    }
    catch (e) {
        console.log(e)
    }
}

const addNewVisitor = async function (
    name,
    ass_name,
    age,
    date,
    time,
    comments
) {

    try {

        const sql =
            "INSERT INTO Visitors(Visitor_Name, Assistant_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Comments) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *";
        const data = [name, ass_name, age, date, time, comments];

        let results = await pool.query(sql, data);
        return results.rows;

    } catch (error) {
        console.log(error);
    }
};



module.exports = { addNewVisitor, createTable };