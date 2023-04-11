import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
      </Routes>
    </Router>
  );
}
