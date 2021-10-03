const cinemaInit = {
    cinemaList: [
        {title: 'Title1', vote_average: 8, overview: 'overview1'},
        {title: 'Title2', vote_average: 5, overview: 'overview2'}
    ]
};

const GET_CINEMA = 'GET_CINEMA';
const ADD_CINEMA = 'ADD_CINEMA';
const CinemaReducer = (state = cinemaInit, action) => {
    switch (action.type) {
        case GET_CINEMA: {
            const data = action.payload.data.results ?? [];
            console.log(data);
            return {...state, cinemaList: data};
        }
        case ADD_CINEMA:{
            const data = action.payload;
            console.log(data);
            return {...state, cinemaList:[data, ...state.cinemaList]}
        }
        default:
            return state;
    }
}


export const getCinemaActionCreator = (payload) => ({type: GET_CINEMA, payload: payload});
export const addCinemaActionCreator = (payload) => ({type: ADD_CINEMA, payload: payload});

export default CinemaReducer;