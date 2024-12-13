import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ChessBoard = () => {
    const squares = useSelector(state => state.squares);
    const dispatch = useDispatch();

    const handleClick = (index) => {
        console.log(`Square clicked: ${index}`);
        dispatch({ type: 'CLICK_SQUARE', index });
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)' }}>
            {squares.map((color, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: color,
                        border: '1px solid gray',
                    }}
                />
            ))}
        </div>
    );
};

export default ChessBoard;