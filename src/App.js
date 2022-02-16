import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hooks from './hooks/Hooks';
import Fundamentals from './fundamentals/Fundamentals';
import Todos from './hooks/components/Todos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="fundamentals" element={<Fundamentals />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="/hooks/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
