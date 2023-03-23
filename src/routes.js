import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Menu from 'components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio></Inicio>} path='/' />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}