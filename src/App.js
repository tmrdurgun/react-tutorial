import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hooks from './hooks/Hooks';
import Fundamentals from './fundamentals/Fundamentals';
import Todos from './hooks/components/Todos';
import Context from './context/Context';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="fundamentals" element={<Fundamentals />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="/hooks/todos" element={<Todos />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
