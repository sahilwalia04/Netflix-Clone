import React from "react";
import Rows from "./Rows";
import Api from "./Api";
import Banner from "./Banner";
import './NetflixShow.css'
const NetflixShow = () => {
  return (
    <div className="netflixshow">
        {/* Nav */}
        <Banner/>
        <Rows title="NETFLIX ORIGINALS" fetchUrl={Api.fetchNetflixOriginals}
        isLargeRow
        />
        <Rows title="Trending Now" fetchUrl={Api.fetchTrending}/>
        <Rows title="Top Rated" fetchUrl={Api.fetchTopRated}/>
        <Rows title="Action Movies" fetchUrl={Api.fetchActionMovies}/>
        <Rows title="Comedy Movies" fetchUrl={Api.fetchComdeyMovies}/>
        <Rows title="Horror Movies" fetchUrl={Api.fetchHorrorMovies}/>
        <Rows title="Romance Movies" fetchUrl={Api.fetchRomanceMovies}/>
        <Rows title="Documentaries" fetchUrl={Api.fetchDocumentaries}/>
        <Rows title="Thriller" fetchUrl={Api.fetchThriller}/>
        
    </div>
  );
};
export default NetflixShow;