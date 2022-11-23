import './App.css';
import CardMovie from './component/CardMovie';
import MoviesJson from './movies.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
            {
              MoviesJson.map(movie => <Col><CardMovie image={"https://image.tmdb.org/t/p/w300" + movie.poster_path} title={movie.title}/></Col>
              )
            }
        </Row>
      </Container>
    </div>
  );
}

export default App;
