import {getCinemaActionCreator} from "../store/reducers/CinemaReducer";
import axios from "axios";
import {setLoadingActionCreator} from "../store/reducers/LoadingReducer";
export const  fetchGetCinema = () => {
    return function (dispatch){
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1b1aa94594e5c58e59d2f9a61028fe64&language=en-US&page=1';
        try {
            dispatch(setLoadingActionCreator(true));
            axios.get(url).then(response=>{
                dispatch(getCinemaActionCreator(response));
                dispatch(setLoadingActionCreator(false));
            }).catch((e)=>{
                dispatch(setLoadingActionCreator(false));
                console.log(e);
            })
        } catch (e) {
            console.log(e);
            dispatch(setLoadingActionCreator(false));
        }
    }
}