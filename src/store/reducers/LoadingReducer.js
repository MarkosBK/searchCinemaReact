const loadingDataInit = {
    isLoading: false,
}

const SET_LOADING = "SET_LOADING";

const LoadingReducer = (state = loadingDataInit, action) => {
    switch (action.type){
        case SET_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};

export const setLoadingActionCreator = (payload) => ({type:SET_LOADING, payload: payload});

export default LoadingReducer;
