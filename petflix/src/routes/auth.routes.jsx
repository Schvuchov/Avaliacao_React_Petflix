import { Routes, Route } from 'react-router-dom'

import App from '../App.jsx'
import Pagina1 from '../components/Pagina1'
import Pagina2 from '../components/Pagina2'


//AuthRoutes que será responsável por renderizar as rotas específicas da parte autenticada da aplicação.
export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/pagina2" element={<Pagina2 />} />
        </Routes>
    )
}