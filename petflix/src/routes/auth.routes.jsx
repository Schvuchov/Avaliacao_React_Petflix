import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'
import Pagina1 from '../pages/Pagina1/Pagina1.jsx'
import Pagina2 from '../pages/Pagina2/Pagina2.jsx'


//AuthRoutes que será responsável por renderizar as rotas específicas da parte autenticada da aplicação.
export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/pagina2" element={<Pagina2 />} />
        </Routes>
    )
}