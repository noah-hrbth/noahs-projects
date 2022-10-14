import React from "react";
import './App.scss';
import Button from './Button.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h1>Aaaaaand your color is: </h1>
                <Button/>
            </div>
        );
    }
}

export default App;
