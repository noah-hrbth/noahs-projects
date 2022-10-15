import React from "react";
import './App.scss';
import Button from './Button.jsx';
import Cursor from "./Cursor.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: [0, 0, 0],
            emojis: ['😄', '🚀', '✌️', '🥳', '🔥', '✨', '🤌', '🎉', '💪', '🫡', '👍'],
            selectedEmoji: '',
            copied: false
        }
        this.setRandomRGBColor = this.setRandomRGBColor.bind(this);
        this.setSelectedEmoji = this.setSelectedEmoji.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    createRandomRGBValue() {
        return Math.floor(Math.random() * 256);
    }

    setRandomRGBColor() {
        this.setState({color: [this.createRandomRGBValue(), this.createRandomRGBValue(), this.createRandomRGBValue()]});
    }

    convertColorToRGB() {
        return `rgb( ${this.state.color.join(', ')} )`;
    }

    converRGBToHex() {
        const [r, g, b] = this.state.color;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) * min);
    }

    setSelectedEmoji() {
        this.setState({selectedEmoji: this.state.emojis[this.getRandomNumber(1, this.state.emojis.length)]});
    }

    copyToClipboard(id) {
        const range = document.createRange();
        range.selectNode(document.getElementById(id));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        this.setSelectedEmoji();
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copied: false});
        }, 1000);
    }

    render() {
        return (
            <div className={this.isLight() ? 'app app--dark' : 'app app--light'}
                 style={{backgroundColor: this.convertColorToRGB()}}>
                <div className={'app__content'}>
                    <h1 className='app__headline'>Aaaaaand your color is: </h1>
                    <a href='#' id={'rgb'} className='app__link' onClick={() => this.copyToClipboard('rgb')}>
                        {this.convertColorToRGB()}
                    </a>
                    <a href='#' id={'hex'} className='app__link' onClick={() => this.copyToClipboard('hex')}>
                        {this.converRGBToHex()}
                    </a>
                </div>
                <Button
                    onClick={() => {
                        this.setRandomRGBColor();
                        document.querySelectorAll('.app__link').forEach((link) => {
                            link.style.pointerEvents = 'auto';
                        });
                        document.querySelector('.app__content').style.opacity = 1;
                        document.querySelector('button').innerText = 'Change';
                    }}
                    isLight={this.isLight()}
                />
                <div className={this.state.copied ? 'app__tooltip app__tooltip--visible' : 'app__tooltip'}>
                    <p>Copied! {this.state.selectedEmoji}</p>
                </div>
                <Cursor isLight={this.isLight()}/>
            </div>
        );
    }
}

export default App;
