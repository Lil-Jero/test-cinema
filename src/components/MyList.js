import React from 'react';

const MyList = ({ movie }) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-")
        return [yy];
    }

    const addStorage = () => {
        let storedData = window.localStorage.movies ? window.localStorage.movies.split(",") : []

        if (!storedData.includes(movie.id.toString())) {
            storedData.push(movie.id)
            window.localStorage.movies = storedData;
        }

    }

    const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",");
        let newData = storedData.filter((id => id != movie.id))
        window.localStorage.movies = newData;
    }

    return (

        <div className='card-container'>
            <div className="card">
                <img src={movie.image
                    ? movie.image.medium
                    : "./img/poster.jpg"
                }
                    alt={`affiche ${movie.name}`} />


                <div>
                    {/* Title */}
                    <h2>{movie.name}</h2>

                    {/* Average Runtime */}
                    <h4>{movie.averageRuntime !== null ? movie.averageRuntime + " min" : ""}</h4>

                    <h4>{movie.rating.average !== null ? movie.rating.average + "/10 ⭐" : "Unrated"}</h4>

                    {/* Release Date */}
                    {movie.premiered ? <h5>{dateFormater(movie.premiered)}</h5> : null}

                    {/* Rating */}


                    {/* Genre */}
                    {/* <ul>{movie.genre ? <li key={movie.genres}>{movie.genres}</li> : ""}</ul> */}

                    {/* Summary */}
                    {/* {movie.summary ? <h3>Summary</h3> : <p>No summary for this show.</p>}
            <p>{movie.summary}</p> */}
                </div>
            </div>
            <div className='btn-container'>
                {!window.localStorage.movies ? (<div className="btn" onClick={() => addStorage()}>Ajouter aux coups de coeurs </div>)
                    : (<div className="btn" onClick={() => {
                        deleteStorage();
                        window.location.reload()
                    }}>Supprimer de la liste</div>)}
                <div>
                    <input type="checkbox" id="scales" name="btn" />
                    <label htmlFor="btn"></label>
                </div>


            </div>
        </div>

    );
};

export default MyList;