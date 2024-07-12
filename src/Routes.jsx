import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio/inicio';
import NovoVideo from './pages/novoVideo';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/index" element={<NovoVideo />} />
      </Routes>
    </BrowserRouter>
  );
}
