const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 4000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})