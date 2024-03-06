import express from 'express';

const app = express();
const PORT = 3002;




app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/edukacja', (req, res) => {
    res.render('edukacja.ejs');
});

app.get('/narzedzia', (req, res) => {
    res.render('narzedzia.ejs');
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt.ejs');
});

app.get('/o_nas', (req, res) => {
    res.render('o_nas.ejs');
});





app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});