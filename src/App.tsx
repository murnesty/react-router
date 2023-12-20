import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-router/" element={<Homepage />} />
        <Route path="/react-router/users/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
