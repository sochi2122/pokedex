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

app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
    });
    
    

//new
//



app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
  })
