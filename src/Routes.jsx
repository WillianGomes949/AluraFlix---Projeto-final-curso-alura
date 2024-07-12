import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './app/pages/Inicio';
import NovoVideo from './app/pages/NovoVideo';

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
