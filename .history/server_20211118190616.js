const express = require('express')
const app = express()

// -- database
const pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs', { data: Pokemon });
	
})



app.get('/pokemon', (req, res) => {


    res.render('index.ejs', {
		// drinks: drinks,
		// food: food,
		// tabTitle: 'Master Branch'
	})
})


app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: pokemon[req.params.id],
		tabTitle: 'All of Them'

	})
})



app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
  })
