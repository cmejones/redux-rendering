const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch (type) {
        case 'ADD_NAME' :
            //create new state
            return [
                ...state, //pull in the original state so it isn't mutated
                action.name //pulling this from the action in index.js
            ];

        default:
            return state;
    }
}