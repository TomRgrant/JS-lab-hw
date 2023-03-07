import React from "react";


const UpcomingFilm = ({name, children}) => {

    return (
        <>
            <a className="link-list" href={children}>{name}</a>
        </>
    );
};

export default UpcomingFilm;