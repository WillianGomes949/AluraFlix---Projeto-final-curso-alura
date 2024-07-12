import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import NovoVideo from './pages/NovoVideo';

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
