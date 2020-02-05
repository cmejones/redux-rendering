const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch (type) {
        case 'ADD_HEIGHT' :
            //create new state
            console.log('hello', height, action.value);
            return {
                ...state, //pull in the original state so it isn't mutated
                height: state.height + action.value
                
            };
        case 'ADD_WIDTH' :
            return {
                ...state, //pull in the original state so it isn't mutated
                width: state.width + action.value
                
            };
        case 'ADD_RED' :
            return {
                ...state, //pull in the original state so it isn't mutated
                color: action.value
                
            };
        case 'ADD_BLUE' :
            return {
                ...state, //pull in the original state so it isn't mutated
                color: action.value
                
            };    


    // ACTION 3 - Change the color

        default:
            return state;
    }
}