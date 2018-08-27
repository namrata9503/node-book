const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/',(request,response) => {
    response.send("response in GET");
})
app.post('/',(request, response)=> {
    response.send("response in post");
})
app.put('/',(request,response)=>{
    response.send("response in put");
})
app.delete('/',(request,response)=>{
    response.send("response in delete");
})


app.get('/api/',(request,response)=>{
    response.json({
        name : "Namrata"
    })
})

app.post('/api/',(request,response)=>{
    response.json({
        name : "Namrata"
    })
})

app.put('/api/',(request,response)=>{
        response.json({
            name:"namrata"
        })
})


app.delete('/api/',(request,response)=>{
    response.json({
        name:"namrata"
    })
})
var books=[
    {
        id : 1,
        name : 'YDKJS'
    },
    {
        id : 2,
        name : ' O"Reilly'
    },
    {
        id : 3,
        name : 'BalguruSwami'
    }
];

app.get('/api/books',(request,response)=>{
    response.json(books);
})

app.get('/api/books/:id',(request, response)=>{
    var  b;
    books.forEach(book => {
        if(book.id==request.params.id)
        {
            b = book
        }
    });
    response.json(b)
})



app.post('/api/books/',(request,response)=>{
    console.log(request.body);
    books.push({
          
            id : request.body.id,
            name: request.body.name

        })
    response.json(books);
})



app.put('/api/books/:id',(request, response)=>{
    var  b;
    books.forEach(book => {
        if(book.id==request.params.id)
        {
            b = book
        }
    });
    response.json(b)
})

app.delete('/api/books/:id',(request,response)=>{
    var b;
    books.forEach((book, index)=>{
        if(book.id == request.params.id){
            books.splice(index,2);
        }
    });
    response.json(books);

})


app.listen(3000, () => console.log('Express server at 3000'))
