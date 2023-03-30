import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {


    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("Terminator");
    const [sortGoodBad, setSortGoodBad] = useState(null)

    useEffect(() => {
        axios
            .get(`https://api.tvmaze.com/search/shows?q=${search}`)
            .then((res) => {
                setMoviesData(res.data)
            })

    }, [search]);


    return (
        <div className="form-component">
            <div className="form-container">
                Rechercher
                <form>
                    <input type="text" placeholder="Entrez le nom d'un film" name="" id="search-input"
                        onChange={(e) => setSearch(e.target.value)} />
                    <div className="search"><span>🔎</span></div>
                </form>
                {/* <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
                        Top <span>⬆</span>
                    </div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
                        Flop <span>⬇</span>
                    </div>
                </div> */}
            </div>
            <div className="result">
                {moviesData
                    .slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.rating - a.rating
                        } else if (sortGoodBad === "badToGood") {
                            return a.rating - b.rating
                        }
                    })
                    .map((movie) => (
                        <Card movie={movie} key={movie.show.id} />
                    ))}
            </div>
        </div>
    );
};

export default Form;