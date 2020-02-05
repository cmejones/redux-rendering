const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch (type) {
        case 'ADD_CIRCLE' :
            //create new state
            console.log('hello');
            return [
                ...state, //pull in the original state so it isn't mutated
                {
                    //radius: 20,
                    radius: Math.floor(Math.random() * 100),
                   // color: "#555999"
                    color:'#'+Math.floor(Math.random()*16777215).toString(16)
                }
                
            ];

        default:
            return state;
    }
}