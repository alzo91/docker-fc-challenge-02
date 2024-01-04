const express = require("express")
const {adjectives,animals,colors,countries, languages,uniqueNamesGenerator} = require("unique-names-generator")
const mysql = require("mysql")
const { v4: uuid_v4} = require("uuid")

const PORT = process.env.PORT ?? 3000;

const app = express()

app.use(express.json())

const configs_db = {
    host: 'db-mysql',
    port:3306,
    database: 'nodeappdb',
    user: 'root',
    password: 'root',
}



function create_connection_db(){
    return mysql.createConnection(configs_db)
}

function generate_name (name = ""){
    const generated_name = name ? name : uniqueNamesGenerator({ 
        dictionaries: [ adjectives, animals, colors, countries, languages ], 
        length:2
    })
    return generated_name;
}

const SQL_INSERT = `insert into people (uuid, name, created_at)`



app.get("/",(_request,response) => {
    const name = generate_name("");  
    const uuid = uuid_v4();

    const connection_db = create_connection_db();
    
    const sql = SQL_INSERT + `values ( '${uuid}','${name}',now());`
    connection_db.query(sql);
    
    connection_db.query(`SELECT * FROM people`,(error, results, fields) => {
        connection_db.end();
        return response.status(200).json({ 
            title: "FullCycle rocks!",
            last_name: name,
            names: results
        })
    })

})

app.get("/all",(_request,response) => {
    const connection_db = create_connection_db();
  
    connection_db.query(`SELECT * FROM people`,(error, results, fields) => {
        connection_db.end();
        return response.status(200).json({ 
            title: "FullCycle rocks!",
            data: results
        })
    })
})

app.post("/subscribe/:name",(request, response)=> {
    const { name} = request.params

    const generated_name = generate_name(name); 
    const uuid = uuid_v4();

    const connection_db = create_connection_db();

    const sql = SQL_INSERT + `values ( '${uuid}','${generated_name}',now());`

    connection_db.query(sql,(error, results, fields) => {
        connection_db.end()
        return response.status(200).json({ 
            title: `Thanks ${name} for subscribed on FullCycle`,
            last_name: generated_name,
        })
    });
})


app.listen(PORT,()=> {
    console.log(`The challenge app-node is running on port ${PORT}`)
})