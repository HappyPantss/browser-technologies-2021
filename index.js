import express from "express";
import fs from "fs";

// Config object
const config = {
    port: 3000
}

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render("overview.ejs")
});

app.get('/design', function(req, res) {
    res.render("design.ejs")
});

app.get('/order', function(req, res) {
    res.render("order.ejs")

    let shirt = {
        color: 'red'
    }

    let data = JSON.stringify(shirt)
    fs.writeFile('data.json', data, finished)

    function finished(err) {
        console.log('succes')
    }
});

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: http://localhost:${config.port}`);
});