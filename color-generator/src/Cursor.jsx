import React from "react";
import './Cursor.scss';

function Cursor(props) {
    const mousePosition = useMousePosition();

    return (
        <div className={props.isLight ? 'cursor cursor--dark' : 'cursor cursor--light'} style={{top: mousePosition.y - 25, left: mousePosition.x - 25}}></div>
    );
}

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({x: null, y: null});

    React.useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({x: ev.clientX, y: ev.clientY});
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};

export default Cursor;