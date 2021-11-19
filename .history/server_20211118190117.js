const express = require('express')
const app = express()

// -- database
const pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send(
		`Gotta Catch em All! <a href="/pub">localhost:3000/pub</a> to get started!`
	)
})
