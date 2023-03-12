const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(1337, () => {
  console.log('Server started on port 1337')
})
