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

    const sql = `DELETE FROM WHERE `

    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })

    con.end()
})