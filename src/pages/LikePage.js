import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
import Card from '../components/Card';
import MyList from '../components/MyList';

const LikePage = () => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        let movieArray = []
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.tvmaze.com/shows/${moviesId[i]}`)
                .then((res) => {
                    setListData((listData) => [...listData, res.data])
                })

        }

    }, [])

    return (
        <div className='form-component'>
            <p>Ma liste</p>
            <div className="result">
                {listData.length > 0 ? (listData.map((movie) => <MyList movie={movie} key={movie.id} />)) : (<h2>Aucun coup de coeur pour le moment</h2>)}
            </div>
        </div >
    );
};

export default LikePage;