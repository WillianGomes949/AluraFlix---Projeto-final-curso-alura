import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/paginas/inicio/Inicio';
import NovoVideo from './Components/paginas/novoVideo/NovoVideo';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/novoVideo" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
