const express = require('express')
const app = express()

// -- database
const Pokemon = require('./models/pokemon')

// -- config
const port = 3000


app.use(express.static('public'))

//include the method-override package
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon')
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));




app.get('/', (req, res) => {
    

    res.send( { data: Pokemon });
})



app.get('/pokemon', (req, res) => {
    tabTitle: 'Master Branch'

    res.render('index.ejs', { data: Pokemon });
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/pokemon', (req, res) => {
    // we need to add an id to req.body to satisfy the id property requirement
    // req.body.id = fruits.length + 1;
    // we'll remove the id property for now

    // we need to cast the 'on' value to a boolean
    console.log('req.body', req.body)
    req.body.readyToEat = !!req.body.readyToEat

    pokemon.push(req.body);

    res.redirect('/fruits') // send a response to the client to ask the client to make another request
    // we redirect every time data is changed
    // data creation
    // updates to the data
    // deletion of data
});


app.get('/pokemon/:id', (req, res) => {
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
