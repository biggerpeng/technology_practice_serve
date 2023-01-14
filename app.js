const express = require('express')
const database = require('./database')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  database.query('SELECT * FROM users', function (error, results, fields) {
    if (!error) {
      console.log(results)
      res.send(JSON.stringify(results))
    }
  })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
