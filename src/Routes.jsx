import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import NovoVideo from './NovoVideo';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/NovoVideo" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
