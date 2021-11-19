const express = require('express')
const app = express()

// -- database
const pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send(
		`Gotta Catch em All! <a href="/pokemon">Pokemon</a> to get started!`
	)
})
