
import { createStore } from 'redux';

const initialState = {
    squares: Array.from({ length: 64 }, (_, index) => (index % 2 === 0 ? 'white' : 'black')),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_SQUARE':
            const newSquares = state.squares.slice();

            if (newSquares[action.index] === 'white') {
                newSquares[action.index] = 'yellow'; 
            } else if (newSquares[action.index] === 'black') {
                newSquares[action.index] = 'red'; 
            }
            return { ...state, squares: newSquares };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;