import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Config object
const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.all('/', urlencodedParser, function(req, res) {
    let savedData = fs.readFileSync('data.json');
    let student = JSON.parse(savedData);

    res.render("overview.ejs", {
        postData: student,
    })
});

app.get('/', function(req, res) {
    res.render("overview.ejs", {
        postData: shirt,
    })
});

app.get('/design', function(req, res) {
    res.render("design.ejs")
});

app.get('/saving', function(req, res) {
    res.render("saving.ejs")
});

app.all('/saving', urlencodedParser, function(req, res) {
    let shirt = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        size: req.body.size,
        color: req.body.color,
        text: req.body.text
    }

    let data = JSON.stringify(shirt, null, 2)

    fs.writeFile('data.json', data, 'utf8', finished)

    function finished(err) {
        // console.log('succes')
    }

    res.redirect("/")
});

app.all('/order', urlencodedParser, function(req, res) {
    let savedData = fs.readFileSync('data.json');
    let student = JSON.parse(savedData);

    res.render("order.ejs", {
        postData: student,
    })
});

app.get('/order', function(req, res) {
    res.render("order.ejs", {
        postData: shirt,
    })
});

app.get('/status', function(req, res) {
    res.render("status.ejs")
});

app.listen(process.env.PORT || port, () =>
    console.log(`Listening on port http://localhost:${port}`)
);