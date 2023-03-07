import React from "react";
import UpcomingFilm from "./UpcomingFilm";


const UpcomingListBox = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <UpcomingFilm name={film.name} key={film.id} id={film.id}>{film.url}</UpcomingFilm>
        );
    });



    return(
        <>
        {filmNodes}
        </>
    );
};







export default UpcomingListBox;