import './App.css';
import CardMovie from './component/CardMovie';
import MoviesJson from './movies.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return ( < div className = "App" >
        <
        Container >
        <
        h1 style = {
            { color: "white" }
        } > Peliculas Favoritas < /h1> <
        Row > {
            MoviesJson.map(
                movie => {
                    if (movie.favorite === true) {
                        return <Col > < CardMovie image = { "https://image.tmdb.org/t/p/w300" + movie.poster_path }
                        title = { movie.title }
                        /></Col >
                    }
                }
            )
        } <
        /Row> < /
        Container > <
        Container >
        <
        h1 style = {
            { color: "white" }
        } > Peliculas < /h1> <
        Row > {
            MoviesJson.map(
                movie => {
                    if (movie.favorite === false) {
                        return <Col > < CardMovie image = { "https://image.tmdb.org/t/p/w300" + movie.poster_path }
                        title = { movie.title }
                        /></Col >
                    }
                }
            )
        } <
        /Row> < /
        Container > <
        Container >
        <
        h1 style = {
            { color: "white" }
        } > Peliculas para Adultos < /h1> <
        Row > {
            MoviesJson.map(
                movie => {
                    if (movie.adult === true) {
                        return <Col > < CardMovie image = { "https://image.tmdb.org/t/p/w300" + movie.poster_path }
                        title = { movie.title }
                        /></Col >
                    }
                }
            )
        } <
        /Row> < /
        Container > <
        /div>
    );
}

export default App;