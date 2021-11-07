const express = require('express')

const app = express()

app.listen(4567, () => console.log("I'm listening"))

app.get('/client-service', (req, res) => res.send("Check your service here"))