import "./App.css";
import CardMovie from "./component/CardMovie";
import MoviesJson from "./movies.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      {" "}
      <input type="text" name="buscador" id="buscador" placeholder="Buscar..."></input>
      <ul id="listaPeliculas">
        {MoviesJson.map(movie =><li className="title" > {movie.original_title}</li>)}
      </ul>
      {
      document.addEventListener("keyup", e=>{

        if(e.target.matches("#buscador")){

            if(e.key ==="Escape")e.target.value = ""

            document.querySelectorAll(".title").forEach(pelicula =>{

                pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?pelicula.classList.remove("filtro")
                  :pelicula.classList.add("filtro")
            })

        }

})}
      <Container>
        {" "}
        <h1
          style={{
            color: "white",
          }}
        >
          {" "}
          Peliculas Favoritas{" "}
        </h1>{" "}
        <Row>
          {" "}
          {MoviesJson.map((movie) => {
            if (movie.favorite === true) {
              return (
                <Col>
                  {" "}
                  <CardMovie
                    image={
                      "https://image.tmdb.org/t / p / w300 " + movie.poster_path
                    }
                    title={movie.title}
                  />{" "}
                </Col>
              );
            }
          })}{" "}
        </Row>{" "}
      </Container>{" "}
      <Container>
        {" "}
        <h1 style={{ color: "white" }}> Peliculas </h1>{" "}
        <Row>
          {" "}
          {MoviesJson.map((movie) => {
            if (movie.favorite === false) {
              return (
                <Col>
                  {" "}
                  <CardMovie
                    image={
                      "https://image.tmdb.org/t / p / w300 " + movie.poster_path
                    }
                    title={movie.title}
                  />{" "}
                </Col>
              );
            }
          })}{" "}
        </Row>{" "}
      </Container>{" "}
      <Container>
        {" "}
        <h1 style={{ color: "white" }}> Peliculas para Adultos </h1>{" "}
        <Row>
          {" "}
          {MoviesJson.map((movie) => {
            if (movie.adult === true) {
              return (
                <Col>
                  {" "}
                  <CardMovie
                    image={
                      "https://image.tmdb.org/t / p / w300 " + movie.poster_path
                    }
                    title={movie.title}
                  />{" "}
                </Col>
              );
            }
          })}{" "}
        </Row>{" "}
      </Container>{" "}
      <Container>
        {" "}
        <h1 style={{ color: "white" }}>
          {" "}
          Peliculas para Toda la familia{" "}
        </h1>{" "}
        <Row>
          {" "}
          {MoviesJson.map((movie) => {
            if (movie.adult === false) {
              return (
                <Col>
                  {" "}
                  <CardMovie
                    image={
                      "https://image.tmdb.org/t / p / w300 " + movie.poster_path
                    }
                    title={movie.title}
                  />{" "}
                </Col>
              );
            }
          })}{" "}
        </Row>{" "}
      </Container>{" "}
    </div>
  );
}
export default App;
