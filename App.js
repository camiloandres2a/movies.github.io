import "./App.css";
import PeliculasFavoritas from "./component/PeliculasFavoritas";
import Peliculas from "./component/Peliculas";
import PeliculasAdultos from "./component/PeliculasAdultos";
import PeliculasFamilia from "./component/PeliculasFamilia";

function App() {
    return (
        <div className="App">
        <div>
            <img style={{width: "80px", borderRadius: "14px", margin: "16px 0"}} src={require('./logoibero.png')}/>
        </div>

            <PeliculasFavoritas />
            
            <Peliculas />
            
            <PeliculasAdultos />
            
            <PeliculasFamilia />
             
        </div>
    );
}
export default App;

