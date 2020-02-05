const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const height = document.getElementById('height');
//debugger;
height.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    dispatch({
        type: 'ADD_HEIGHT',
        value: 10
    })
})

const width = document.getElementById('width');
width.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'ADD_WIDTH',
        value: 10
    })
})

const red = document.getElementById('red');
red.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'ADD_RED',
        value: '#ff0000'
    })
})

const blue = document.getElementById('blue');
blue.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'ADD_BLUE',
        value: '#0000ff'
    })
})