import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./shared/components/navigation/NavBar";
import Users from "./users/pages/Users";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/users" element={<Users />} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
