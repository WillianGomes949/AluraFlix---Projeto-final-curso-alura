import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio';
import NovoVideo from './Components/NovoVideo';

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
