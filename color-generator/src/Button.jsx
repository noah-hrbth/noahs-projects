import React from "react";
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.isLight ? 'dark' : 'light'} onClick={this.props.onClick}>
                Turn the light on!
            </button>
        );
    }
}

export default Button;