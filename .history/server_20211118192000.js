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
    
    

//GET /pokemon/new

//GET /pokemon/:id/edit
//POST /pokemon
//PUT /pokemon/:id
//DELETE /pokemon/:id

app.delete('/pokemon/:id', (req, res) => {
    fruits.splice(req.params.id, 1); //remove the item from the array
    res.redirect('/fruits'); //redirect back to index route
  });
  



app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
  })
