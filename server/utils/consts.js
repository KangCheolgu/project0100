import mariadb from 'mysql'

const conn = mariadb.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'kangcg',
    password: '12345',
    database: 'project0100'
})

export default conn;