const express = require('express')
const app = express()

// -- database
const drinks = require('./models/drinks')
const food = require('./models/food')

// -- config
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send(
		`Welcome to the gitPub app! Go to <a href="/pub">localhost:3000/pub</a> to get started!`
	)
})
