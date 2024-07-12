import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './app/inicio/inicio';
import NovoVideo from './app/novoVideo/novoVideo';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novoVideo" element={<NovoVideo />} />
      </Routes>
    </BrowserRouter>
  );
}
