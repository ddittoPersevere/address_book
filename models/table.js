const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sscssc',
    database:'address_book_db'
})

con.connect((error) => {
    if(error) throw error
    console.log("Connected to database")

    const sql = `CREATE TABLE contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(255)
    )`

    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })

    con.end()
})