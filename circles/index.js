const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const button = document.getElementById('addCircle');

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    const newCircle = button['click'];
    dispatch({
        type: 'ADD_CIRCLE',
        name: newCircle
    })
})