import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyDyVKmze_hiG4R1Y4BaQh3FjjKFjZRY2Ug';

// Create a new Component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// Take this Component's generated HTML and put it on the page(in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
