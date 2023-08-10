const php = "김영준"
console.log(php)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req,res) => {
    console.log(req)
    res.send({id:1, name:"김영준", skill:['java', 'php']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})