## Technologies Used 💻
- **Node.js** & **Express**: Server-side JavaScript framework  
- **Nodemon**: Automatic restart during development  
- **HTML/CSS/JavaScript**: Frontend development  
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing

## Installation & Setup 🛠️

1. **Clone the repository:**
   - Open your terminal and run:
     ```bash
     git clone https://github.com/bitcham/FullStack-School-Assignment.git
     cd fullstack_project
     ```

2. **Backend Setup:**
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Start the backend server with Nodemon:
     ```bash
     npm run dev
     ```
   - The server listens on **port 5000**. You can verify by visiting [http://localhost:5000/api/](http://localhost:5000/api/)

3. **Frontend Setup:**
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Open `index.html` in your browser directly or use a local server (e.g., VS Code Live Server extension).

## Usage 🚀

- **View Cities:**  
  Open the homepage (`index.html`) to fetch and display the list of cities in a table.

- **Add a New City:**  
  Use the form at the bottom of the homepage to add a city by providing its name and country.

- **Edit a City:**  
  Click on a city's ID (displayed as a link) to navigate to the details page (`city.html`). Click **Edit** to switch to edit mode, then **Save** to update the city's details.

- **Delete a City:**  
  Click the ❌ button next to a city in the list to delete it.

## API Endpoints 🔌

- **GET /api/**  
  - **Description:** Returns a welcome message.  
  - **Example:** [http://localhost:5000/api/](http://localhost:5000/api/)

- **GET /api/cities/**  
  - **Description:** Retrieves an array of city objects.  
  - **Example:** [http://localhost:5000/api/cities/](http://localhost:5000/api/cities/)

- **GET /api/cities/:id**  
  - **Description:** Retrieves a specific city by its ID.  
  - **Example:** [http://localhost:5000/api/cities/2](http://localhost:5000/api/cities/2)

- **POST /api/cities/**  
  - **Description:** Adds a new city.  
  - **Request Body Example:**
    ```json
    {
      "city": "Helsinki",
      "country": "Finland"
    }
    ```

- **DELETE /api/cities/:id**  
  - **Description:** Deletes a city by its ID.

- **PUT /api/cities/**  
  - **Description:** Updates an existing city.  
  - **Request Body Example:**
    ```json
    {
      "id": 4,
      "city": "Tampere",
      "country": "Finland"
    }
    ```

## Frontend 🌐

- **index.html:**  
  Displays all cities and includes a form for adding new cities.

- **city.html:**  
  Shows detailed information for a selected city with options to edit and update.

- **JavaScript Files:**  
  - `script.js` handles fetching the list of cities, adding, and deleting operations.  
  - `city.js` manages fetching a single city's details and updating its information.

