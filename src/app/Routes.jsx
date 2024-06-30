import Inicio from '@/Paginas/Inicio/Inicio';
import NotFound from '@/Paginas/NotFound/NotFound';
import NovoVideo from '@/Paginas/NovoVideo/NovoVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/Novo video" element={<NovoVideo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
