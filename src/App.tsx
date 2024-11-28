import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { DetailsPage } from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </Router>
  );
}

export default App;