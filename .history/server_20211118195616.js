const express = require('express')
const app = express()

// -- database
const Pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

//include the method-override package
const methodOverride = require('method-override');
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));





app.get('/', (req, res) => {
    tabTitle: 'Master Branch'

    res.render('index.ejs', { data: Pokemon });
    res.send('im alive')
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
    pokemon.splice(req.params.id, 1); //remove the item from the array
    res.redirect('/pokemon'); //redirect back to index route
  });
  



app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
  })
