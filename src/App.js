import React from 'react';
import {loadCSS} from 'fg-loadcss';
import Home from './components/Home';

function App() {
    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.11.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <div>
            <Home />
        </div>
    )
}

export default App;
