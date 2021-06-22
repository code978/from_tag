import React, { useState } from 'react';
import { axios } from 'axios';
import './home.css';


const home = () => {
    
    // const [books, setBooks] = useState([]);

    // const fetchData = async () => {
    //     const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
    //     const response = await axios.get(apiURL)
    //     setBooks(response.data)
    // }
    
    return (

        <div className="App">
            <h1>Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>

            {/* Fetch data from API */}
            <div>
                <button className="fetch-button">Fetch Data</button>
                <br />
            </div>

            {/* Display data from API */}

            {/* Use JSX below for each book */}
            <div className="books">
                <div className="book">
                    <h3>Book Number</h3>
                    <h2>Book Name</h2>

                    <div className="details">
                        <p>👨: Author/Authors</p>
                        <p>📖: Number of pages</p>
                        <p>🏘️: Book Country</p>
                        <p>⏰: Release date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
