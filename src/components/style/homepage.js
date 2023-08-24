import { useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import ImgMediaCard from "../common/main";
import axios from "axios";

const  Homepage= ()=>{
    const [movieData,setMovieData]=useState();

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '0d480b3b5amsh12840269869dac6p168ecdjsnb03e98f2a28c',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};
 
async function getMoviesData(){
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
    getMoviesData();
},[]);


    return<>
    <div>
    <Header/>
    <h1>Welcome to MOVIEBAZAAR</h1>
    <ImgMediaCard/>
    <Footer/>
    </div>
    </>
}

export default Homepage;