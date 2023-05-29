import Reservar from './pages/Reservar';
import Home from './pages/Home';
import Listar from './pages/Listar'
import Success from './pages/Success'
import Editar from './pages/Editar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Listar />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </Router>
  );
}

export default App;
