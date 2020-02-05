const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const likes = document.getElementById('sortLikes');
//debugger;
likes.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'SORT_LIKES'   
    });
});

const retweets = document.getElementById('sortRetweets'); 
//debugger;
retweets.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'SORT_RETWEETS'   
    });
});

const replies = document.getElementById('sortReplies');
//debugger;
replies.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch({
        type: 'SORT_REPLIES'   
    });
});
