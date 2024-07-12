import Inicio from '../paginas/inicio/Inicio';
import NovoVideo from '../paginas/novoVideo/NovoVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
