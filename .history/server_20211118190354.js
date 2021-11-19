const express = require('express')
const app = express()

// -- database
const pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send(
		`Gotta Catch em All! <a href="/pokemon">Pokemon</a>`
	)
})



app.get('/pokemon', (req, res) => {


    res.render('index.ejs', {
		// drinks: drinks,
		// food: food,
		// tabTitle: 'Master Branch'
	})
})


app.get('/app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', {
		drink: drinks[req.params.id],
		tabTitle: 'fooBar()'

	})
})/:id', (req, res) => {
	res.render('drinks_show.ejs', {
		drink: drinks[req.params.id],
		tabTitle: 'fooBar()'

	})
})