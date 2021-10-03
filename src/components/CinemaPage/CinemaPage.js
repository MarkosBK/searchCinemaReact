import React, {useEffect, useState, useMemo} from 'react';
import c from './CinemaPage.module.css'
import MyButton from "../UI/MyButton";
import MyInputText from "../UI/MyInputText";
import {fetchGetCinema} from "../../AsyncActions/cinemaAsyncActions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import Loading from "../Loading/Loading";
import CinemaItem from "./CinemaItem/CinemaItem";
import {addCinemaActionCreator} from "../../store/reducers/CinemaReducer";
const CinemaPage = () => {
    const dispatch = useDispatch();
    let cinemaList = useSelector(state=>state.cinema.cinemaList)
    const isLoading = useSelector(state=>state.loading.isLoading);

    const [title, setTitle] = useState('');
    const [vote_average, setVote] = useState(0);
    const [overview, setOverview] = useState('');
    const [searchText, setSearchText] = useState('');
    useEffect(()=>{
        dispatch(fetchGetCinema());
    }, [])
    useEffect(()=>{
        if(vote_average > 10){
            setVote(10);
        }
        if(vote_average < 0){
            setVote(0);
        }

    }, [vote_average])

    cinemaList = useMemo(()=>{
        console.log('filter')
        return cinemaList.filter(item=> item.title.toUpperCase().includes(searchText.toUpperCase()))
    }, [searchText, cinemaList]);
    function addCinema(){
        if(title !== '' && overview !== '' && !isNaN(parseInt(vote_average)) && vote_average <= 10 && vote_average >= 0){
            dispatch(addCinemaActionCreator({title, vote_average, overview}));
            setTitle('');
            setVote(0);
            setOverview('');
        }
    }

    if(isLoading){
        return (
            <Loading/>
        )
    }
    return (
        <div className={c.wrapper}>
            <div className={c.form}>
                <div className={c.add}>
                    <div className={c.add_inputs}>
                        <MyInputText placeholder='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                        <MyInputText type='number' min='0' max='10' placeholder='vote' value={vote_average} onChange={e=>setVote(e.target.value)}/>
                    </div>
                    <MyInputText placeholder='overview' value={overview} onChange={e=>setOverview(e.target.value)}/>
                    <div className={c.add_button}>
                        <MyButton onClick={addCinema}>add</MyButton>
                    </div>
                </div>
                <br/>
                <div className={c.search}>
                    <MyInputText placeholder="...search" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
                </div>
            </div>

            <div className={c.list}>
                {
                    cinemaList.length > 0 ?
                    cinemaList.map((item, index)=>
                        <CinemaItem item={item} key={index}/>
                    )
                    :
                        <h2 style={{textAlign: 'center', width: '100%'}}>nothing to show</h2>
                }

            </div>
        </div>
    );
};

export default CinemaPage;
