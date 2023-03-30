import React, { useEffect, useState } from 'react';

const Card = ({ movie }) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-")
        return [yy];
    }

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Vérifie si le film est en favori lorsqu'il est monté
        const favorites = localStorage.getItem("movies") || [];
        setIsFavorite(favorites.includes(movie.show.id));
    }, [movie.show.id]);

    const handleFavorite = () => {

        let storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : []
        const favorites = localStorage.getItem("movies") || [];
        if (favorites.includes(movie.show.id)) {
            // Retirer le film des favoris s'il est déjà en favori
            const updatedFavorites = favorites.filter((fav) => fav !== movie.show.id);
            localStorage.setItem("movies", (updatedFavorites));
            setIsFavorite(false);
        } else {
            // Ajouter le film aux favoris s'il n'est pas déjà en favori
            if (!storedData.includes(movie.show.id.toString())) {
                storedData.push(movie.show.id)
                window.localStorage.movies = storedData;
            }
            setIsFavorite(true);
        }
    };

    return (
        <>
            <div className='card-container'>
                <div className="card">
                    <img src={movie.show.image
                        ? movie.show.image.medium
                        : "./img/poster.jpg"
                    }
                        alt={`affiche ${movie.show.name}`} />

                    {/* Title */}

                    <div>
                        <h2>{movie.show.name}</h2>

                        {/* Average Runtime */}
                        <h4>{movie.show.averageRuntime !== null ? movie.show.averageRuntime + " min" : ""}</h4>

                        {/* Rating */}
                        <h4>{movie.show.rating.average !== null ? movie.show.rating.average + "/10 ⭐" : "Unrated"}</h4>

                        {/* Release Date */}
                        {movie.show.premiered ? <h5>{dateFormater(movie.show.premiered)}</h5> : null}

                        {/* Genre */}
                        {/* <ul>{movie.show.genre ? <li key={movie.show.genres}>{movie.show.genres}</li> : ""}</ul> */}

                        {/* Summary */}
                        {/* {movie.show.summary ? <h3>Summary</h3> : <p>No summary for this show.</p>}
                        <p>{movie.show.summary}</p> */}
                    </div>
                </div>

                <div className='btn-container'>
                    <button className='btn' disabled={isFavorite} onClick={handleFavorite}>
                        {isFavorite ? "Déjà dans ma liste" : "Ajouter à ma liste"}
                    </button>
                </div>
            </div >
        </>
    );

};

export default Card;