import Home from './pages/Home/Home';
import Pagina1 from './pages/Pagina1/Pagina1';
import Pagina2 from './pages/Pagina2/Pagina2';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/Avaliacao_React_Petflix" element={<Home />} />
            <Route path="https://schvuchov.github.io/Avaliacao_React_Petflix/Avaliacao_React_Petflix/pagina1" element={<Pagina1 />} />
            <Route path="https://schvuchov.github.io/Avaliacao_React_Petflix/Avaliacao_React_Petflix/pagina2" element={<Pagina2 />} />
        </Routes>
    </Router>
  )
}

export default App;
