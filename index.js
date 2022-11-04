const express = require('express')
const { readFile } = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  readFile("./index.html", "utf-8", (err, html) => {
    if(err) {
      res.send("Ooops Something went wrong")
    }
    res.send(html);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
