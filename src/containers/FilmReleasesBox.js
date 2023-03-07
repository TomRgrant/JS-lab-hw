import React, {useState} from "react";
import UpcomingListBox from "../components/UpcomingListBox";


const ReleasesBox = () => {

    const [films, setFilms] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]);

    return (
        <>
        <section className="box">
            <div>
                <h1>Upcoming Films</h1>
                <hr></hr>
                <div className="list" >
                    <UpcomingListBox films={films} />
                </div>
            </div>

            <div>
                <hr></hr>
                <form className="view-more"  action="https://www.imdb.com/calendar/?region=gb">
                    <input className="view-more-button" type="submit" value="View more upcoming releases &gt;&gt;" />
                </form>
            </div>
        </section>
        </>
    );

};

export default ReleasesBox;