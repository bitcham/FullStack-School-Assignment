const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

app.use(cors({
    origin: [
        'http://localhost:5500'
    ]
}));

app.get('/api', (req, res) => {
    res.send('👋 Hello Backend API 👋');
});

app.listen(PORT, () => {
    console.log(`BACKEND SERVER LISTENING ON PORT ${PORT}`);
});


const CITIES = [
    {
        id: 1,
        city: 'Oslo',
        country: 'Norway',
    }, {
        id: 2,
        city: 'Paris',
        country: 'France',
    }, {
        id: 3,
        city: 'Pretoria',
        country: 'South Africa',
    },
];

app.get('/api/cities/', (req, res) => {
    res.status(200).send(CITIES);
});

app.get('/api/cities/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const city = CITIES.find(item => {
        return item.id === id;
    })

    if (!city) {
        res.status(404).send({ message: "City not found" });
    }

    res.status(200).send(city);
});

app.get('/', (req, res) => {
    const data = { name: 'John', age: 30 };
    res.json(data);
});


app.get('/api/cities/:id', (req, res) => {
    res.send(req.params.id);
});


app.get('/api/cities/:id/:name', (req, res) => {
    res.send(req.params);
});


app.post('/api/cities/', (req, res) => {
    console.log(req.body)
    const city = {
        id: CITIES.length + 1,
        city: req.body.city,
        country: req.body.country,
    };
    CITIES.push(city);
    res.send(city);
});




app.put('/api/cities/', (req, res) => {
    console.log(req.body)
    const id = parseInt(req.body.id);

    const cityIndex = CITIES.findIndex(item => item.id === id);
    if (cityIndex === -1) {
        res.status(404).send('City not found, can not update');
        return;
    }

    const updatedCity = CITIES.find(item => item.id === id);
    updatedCity.city = req.body.city;
    updatedCity.country = req.body.country;

    CITIES[cityIndex] = updatedCity;
    res.send(updatedCity);

});

app.delete('/api/cities/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const city = CITIES.find(c => c.id === id);
    if (!city) {
        return res.status(404).send('Not found');
    }
    const index = CITIES.indexOf(city);
    CITIES.splice(index, 1);
    res.send(city);
});



