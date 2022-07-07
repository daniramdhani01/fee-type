import './App.css';
import { Routes, Route } from 'react-router-dom'

// import pages
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound';
import Greating from './pages/Greating';
import EditFT from './pages/EditFT';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greating />} />
      <Route index path="/master-data-management/fee-type" element={<LandingPage />} />
      <Route index path="/master-data-management/fee-type/edit-fee-type" element={<EditFT />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}


export default App;
