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









app.listen(3000, () => console.log('Express server at 3000'))
