import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import NovoVideo from './NovoVideo';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/novoVideo" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
