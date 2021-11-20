const express = require('express')
const app = express()


const port = 3000

app.use(express.static('public'))

const methodOverride = require('method-override');

const pokemon = require('./models/pokemon')

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));




app.get('/', (req, res) => {
    res.send( { pokemon });
})



app.get('/pokemon', (req, res) => {
    res.render('index.ejs', pokemon );
})
)


app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/pokemon', (req, res) => {
    // we need to add an id to req.body to satisfy the id property requirement
    // req.body.id = fruits.length + 1;
    // we'll remove the id property for now

    // we need to cast the 'on' value to a boolean
    //console.log('req.body', req.body)
    //req.body.readyToEat = !!req.body.readyToEat

    pokemon.push(req.body);

    res.redirect('/pokemon') // send a response to the client to ask the client to make another request
    // we redirect every time data is changed
    // data creation
    // updates to the data
    // deletion of data
});


app.get('/pokemon/:idx', (req, res) => {
    res.render('show.ejs', pokemon[req.params.idx]);
    });
    
    
    app.delete('/pokemon/:idx', (req, res) => {
        pokemon.splice(req.params.idx, 1)
        res.redirect('/pokemon')
    })


    app.get('/pokemon/:idx/edit', (req,res) => {
        res.render('edit.ejs', {
                pokemon: pokemon[req.params.idx],
                index: req.params.idx,
            });
    })



// Put (update)
app.put('/pokemon/:idx', (req,res) => {
    // console.log('put route', req.body)
    // if(req.body.readyToEat === 'on') {
        // req.body.readyToEat = true
    // } else {
        // req.body.readyToEat = false
    // }
    // ternary 
    // req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    pokemon[req.params.idx] = req.body
    res.redirect('/pokemon')
})


app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
  })
