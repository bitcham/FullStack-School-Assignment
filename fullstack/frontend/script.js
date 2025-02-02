"use strict";


const fetchCities = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/cities');
        const data = await response.json();
        console.log(data);
        populateTable(data);
    } catch (error) {
        console.log(error)

    }
}



const populateTable = (data) => {
    const table = document.getElementById('cities-table');
    table.innerHTML = "";

    data.map(item => {
        const row = document.createElement('tr');
        const idColumn = document.createElement('td');
        idColumn.className = "column-id";
        idColumn.innerHTML = '<a href="city.html">' + item.id + '</a>';
        idColumn.onclick = () => {
            sessionStorage.setItem('cityId', item.id);
        }
        row.appendChild(idColumn);

        const nameColumn = document.createElement('td');
        nameColumn.className = "column-name";
        nameColumn.innerText = item.city;
        row.appendChild(nameColumn);

        const countryColumn = document.createElement('td');
        countryColumn.className = "column-country";
        countryColumn.innerText = item.country;
        row.appendChild(countryColumn);


        const deleteColumn = document.createElement('td');
        deleteColumn.className = 'column-delete';
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "x";
        deleteButton.onclick = () => {
            deleteCity(item.id);
        }
        deleteColumn.appendChild(deleteButton);
        row.appendChild(deleteColumn);

        table.appendChild(row);
    });
};

const form = document.getElementById('city-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = {
        city: form.elements['city'].value,
        country: form.elements['country'].value
    }
    addCity(city);
    form.elements['city'].value = "";
    form.elements['country'].value = "";
})

const addCity = async (city) => {
    try {
        const response = await fetch('http://localhost:5000/api/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(city)
        });
        if (response.status == 200) {
            fetchCities();
        }
    } catch (error) {
        console.log(error);
    }
}


const updateCity = async () => {
    const cityColumn = document.getElementById('city-name');
    const countryColumn = document.getElementById('city-country');
    const city = {
        id: sessionStorage.getItem('cityId'),
        city: document.getElementById('name-input').value,
        country: document.getElementById('country-input').value
    }
    try {
        const response = await fetch('http://localhost:5000/api/cities', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(city)
        });
        const data = await response.json();
        if (response.status == 200) {
            cityColumn.innerText = data.city;
            countryColumn.innerText = data.country;
            saveButton.style.display = 'none';
            editButton.style.display = 'inline';
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteCity = async (id) => {
    try {
        const response = await fetch('http://localhost:5000/api/cities/' + id, {
            method: 'DELETE'
        });


        if (response.status == 200) {
            fetchCities();
        }
    } catch (error) {
        console.log(error);
    }
};




fetchCities();