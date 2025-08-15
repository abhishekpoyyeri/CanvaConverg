import { useState } from 'react';
import SignupPage from './signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CanvasConverge from './canva';
import Communities from './communit';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/canva" element={<CanvasConverge />} />
          <Route path="/communit" element={<Communities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
